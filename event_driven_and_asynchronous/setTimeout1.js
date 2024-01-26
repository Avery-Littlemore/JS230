// Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, 
// and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 
// 2 seconds, etc. Note that the computation of the time is not dependent on when a previous 
// number was logged. This means that for 10 numbers a total of 10 seconds would have passed.

function makeLogger(number) {
  return function() {
    console.log(number);
  }
}

function delayLog() {
  for (let index = 1; index <= 10; index += 1) {
    let logger = makeLogger(index);
    setTimeout(logger, index * 1000);
  }
}
delayLog();

// setTimeout(() => {
//   console.log('!');
// }, 3000);

// setTimeout(() => {
//   console.log('World');
// }, 1000);

// console.log('Hello');