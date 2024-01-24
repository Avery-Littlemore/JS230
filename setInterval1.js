// Write a function named startCounting that logs a number to the console every second, starting with 1. 
// Each number should be one greater than the previous number.

let counterId;

function startCounting() {
  let count = 0;
  counterId = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);
}
startCounting();

function stopCounting() {
  clearInterval(counterId);
}