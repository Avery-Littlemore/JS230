// Rewrite the downloadFile callback function from the last practice problem as a new promise-based function called downloadFilePromise. 
// Instead of using a callback, it should return a promise that resolves with the message "Download complete!" after a delay.

function downloadFilePromise() {
  return new Promise((resolve) => {
    console.log("Downloading file...");
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });
}

downloadFilePromise().then((resolve) => {
  console.log(resolve);
});

// Convert the processData function from the last practice problem into a new function named processDataPromise that uses promises. 
// This function should return a promise that processes an array of numbers after a delay, utilizing the .then() method for logging 
// the altered array.

function processDataPromise(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numbers.map((number) => number * 2);
      resolve(processed);
    }, 1000);
  });
}

// Example usage:
processDataPromise([1, 2, 3]).then((processedNumbers) => {
  console.log(processedNumbers);
  // After 1 second, logs: [2, 4, 6]
});

// Create a promise called flakyService that simulates a service that sometimes fails. 
// The promise should resolve with "Operation successful" or reject with "Operation failed" randomly. 
// Use .then() for a successful operation log and .catch() for logging a failed operation.

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
  .catch(console.log);

// Imagine a situation where you need to clean up resources (e.g., close a file) whether an operation succeeds or fails. 
// Create a promise that resolves with "Operation complete" and demonstrate how to perform cleanup after the operation 
// completes by using .finally().

function operation() {
  return new Promise((resolve) => {
    console.log("Operation started");
    setTimeout(() => {
      resolve("Operation complete");
    }, 1000);
  });
}

operation()
  .then(console.log)
  // Logs: Operation complete
  .finally(() => {
    console.log("Cleaning up resources...");
    // Always logs after operation completion
  });

// Practice chaining promises by creating a promise chain that involves three promises. 
// The first promise should resolve with a number, then the chain should double the number and add 5 in successive .then() calls. 
// Log the result after the final operation.

Promise.resolve(7)
  .then((number) => number * 2)
  .then((number) => number + 5)
  .then((result) => console.log(result));
// Logs: 19