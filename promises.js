// Write a function basicCallback that receives a callback function and a numeric argument. 
// This function should execute the callback, passing it the number after 2 seconds using setTimeout. 
// The callback should then multiply the number by 2 and log the result.

function basicCallback(callback, number) {
  setTimeout(() => {
    callback(number);
  }, 2000);
}

// Example usage:
basicCallback((number) => {
  console.log(number * 2);
}, 5);
// After 2 seconds, logs: 10

// Create a function downloadFile that simulates downloading a file by logging "Downloading file...". 
// After a delay of 1.5 seconds, it should call the callback with the argument "Download complete!".

function downloadFile(callback) {
  console.log('Downloading file...');
  setTimeout(() => {
    callback('Donwload complete!');
  }, 1500); 
}

// Write a function processData that takes in two parameters: an array of numbers and a callback function. 
// This function should use setTimeout to simulate a time-consuming computation by waiting 1 second. 
// After the delay, it should apply the callback to each number in the array, and then log the new array.

function processData(numbers, callback) {
  setTimeout(() => {
    const processed = numbers.map(callback);
    console.log(processed);
  }, 1000);
}

// Example usage:
processData([1, 2, 3], (number) => number * 2);
// After 1 second, logs: [2, 4, 6]

// Build a function waterfallOverCallbacks that chains the execution of multiple callbacks. 
// This function should take an array of callbacks that each take a single numerical argument. 
// Each callback should multiply the number by 2 and then pass it to the next callback in the array. 
// Log the result after the last callback executes.

function waterfallOverCallbacks(callbackArray, num) {
  for (let i = 0; i < callbackArray.length; i += 1) {
    num = callbackArray[i](num)
  }
  console.log(num);
}

// Example usage:
const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Logs: 8

// Consider the function startCounter that accepts a callback. 
// It should use setInterval to call the callback every second, incrementing and logging a counter variable each time. 
// Also, provide a way for the callback to stop the counter after reaching a specified value.

function startCounter(callback) {
  let counter = 0;
  let intervalId = setInterval(() => {
    counter += 1;
    if (callback(counter) === true) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops