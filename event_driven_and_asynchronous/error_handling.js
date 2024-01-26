// Use the flakyService function from the last practice problem to handle errors gracefully by logging 
// "An error occurred" in a .catch() block, instead of logging "Operation failed" directly.

function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

flakyService()
  .then(console.log)
  // Logs: Operation successful
  .catch(() => console.error("An error occurred"));
// Logs: An error occurred

// Suppose you are fetching user data from an API. Handle the error thrown by this fetchUserData function, 
// catch it and log only the error message. Then, use .finally() to log "Fetching complete".

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

fetchUserData()
  .catch((error) => console.log(error.error))
  .finally(() => console.log('Fetching complete'));

// Implement a function retryOperation that attempts to perform an operation by calling a provided function operationFunc. 
// If operationFunc throws an error, retryOperation should retry the operation up to two additional times before giving up 
// and logging "Operation failed".

function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    return operationFunc().catch((err) => {
      if (attempts < 2) {
        attempts++;
        console.log(`Retry attempt #${attempts}`);
        return attempt();
      } else {
        throw err;
      }
    });
  }

  return attempt().catch(() => console.error("Operation failed"));
}

// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);

// Imagine an async operation represented by mockAsyncOp promise that can either resolve or reject. 
// You want to ensure that no matter the outcome, you log "Operation attempted". 
// Provide an implementation with .finally() that achieves this.

function mockAsyncOp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 1000);
  });
}

mockAsyncOp()
  .then(console.log)
  .catch(console.log)
  .finally(() => console.log('Operation attempted'));

// Implement a loadData function that fetches data but sometimes fails. 
// It should return a promise that either resolves with "Data loaded" or rejects with "Network error". 
// Use a .catch() block to return a recovery promise that resolves with "Using cached data" in case of failure.

function loadData() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Data loaded");
    } else {
      reject("Network error");
    }
  }).catch(() => {
    console.error("An error occurred. Attempting to recover...")
    return Promise.resolve("Using cached data");
  })
  ;
}

loadData()
  .then(console.log);