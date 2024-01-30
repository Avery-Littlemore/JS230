// Write some JavaScript code that loads JSON data from https://api.github.com/repos/rails/rails, parses the JSON
//  into a JavaScript object, and then logs the HTTP status code and the number of open issues to the console. 
//  The property to get the number of open issues is open_issues.

let request = new XMLHttpRequest();
// request.open('GET', 'https://api.github.com/repos/rails/rails');
request.open('GET', 'hts://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  let data = request.response;
  console.log(request.status);
  console.log(data.open_issues);
});

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
})
request.send();

// 200
// 1159 // This should be whatever the current value is

// Extend the code from the previous exercise to log the message 'The request could not be completed!' 
// to the console when the request produces an error. You may replace the url in the previous exercise to 
// "hts://api.github.com/repos/rails/rails" so that the error handler will be triggered.

