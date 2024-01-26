// Convert the downloadFilePromise function you saw previously to an asynchronous function named asyncDownloadFile. 
// Utilize await to pause execution until the file download completes before logging the success message.

async function asyncDownloadFile() {
  console.log("Downloading file...");
  const message = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });

  console.log(message);
}

// asyncDownloadFile();

// Rewrite the loadData function using async/await, making sure to handle both the success scenario (console.log) 
// and the error scenario (console.error).

async function loadData() {
  try {
    let message = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve("Data loaded");
          } else {
            reject("Network error");
          }
        }, 1000);
      })
  
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

// loadData();

// Create an async function fetchResource that receives a URL, attempts to fetch the resource, and logs the JSON response. 
// If an error occurs during fetching, the function should log "Failed to load resource". Regardless of success or failure, 
// confirm that the resource was attempted by logging "Resource fetch attempt made".

async function fetchResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to load resource');
  } finally {
    console.log('Resource fetch attempt made');
  }
}

// // Example usage:
// fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// // Logs fetched data, then "Resource fetch attempt made"
// // On error, logs "Failed to load resource", then "Resource fetch attempt made"

// Suppose you need to perform a sequential task: fetching a user's profile, then their posts, and then their comments. 
// Write an async function fetchUserProfile that awaits each step, catching and logging any errors, while still ensuring 
// that each step is attempted.

async function fetchUserProfile(userId) {
  try {
    const userProfile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((res) => res.json());
    console.log("User Profile", userProfile);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }

  try {
    const userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    ).then((res) => res.json());
    console.log("User Posts", userPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    const userComments = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/comments`
    ).then((res) => res.json());
    console.log("User Comments", userComments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

// Example usage:
fetchUserProfile(1);
// Logs user profile, posts, and comments. Catches and logs errors at each step if they occur.
// Mock API:
// GET https://jsonplaceholder.typicode.com/users/1
// GET https://jsonplaceholder.typicode.com/users/1/posts
// GET https://jsonplaceholder.typicode.com/users/1/comments