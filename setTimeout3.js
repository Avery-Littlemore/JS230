// In what sequence does the JavaScript runtime run the functions q, d, n, z, s, f, and g in the following code?

setTimeout(() => { // 1
  setTimeout(() => { // 6
    q(); // 12
  }, 15);

  d(); // 7

  setTimeout(() => { // 8
    n(); // 10
  }, 5);

  z(); // 9
}, 10);

setTimeout(() => { // 2
  s(); // 11
}, 20);

setTimeout(() => { // 3
  f(); // 5
});

g(); // 4

// Notice that g still comes before f even though the timeout duration defaults to 0. 
// The reason for this behavior is that while the function can execute immediately already, 
// it isn't until the next event cycle that it will execute.

