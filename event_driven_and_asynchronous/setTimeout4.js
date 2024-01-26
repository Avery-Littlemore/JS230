// Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. 
// The function should wait for the indicated period, then invoke the callback function.

function afterNSeconds(callback, seconds) {
  let milliseconds = seconds * 1000
  setTimeout(callback, milliseconds);
}