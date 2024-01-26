// Starting with the template below, write some JavaScript code to move the red X to the last position in the document that the user clicked

document.addEventListener('click', event => {
  let x = document.querySelector('.x');
  x.style.left = String(event.clientX) + 'px';
  x.style.top = String(event.clientY) + 'px';
});

// Update your solution to the previous problem to make the red X move as you move the mouse around the document instead of depending on clicks.

document.addEventListener('mousemove', event => {
  let x = document.querySelector('.x');
  x.style.left = String(event.clientX) + 'px';
  x.style.top = String(event.clientY) + 'px';
});

// Update your solution to the previous problem to change the color of the red X to blue when the user presses the b key, 
// green in response to the g key, and red in response to r. The X should continue to follow the mouse around.

document.addEventListener('mousemove', event => {
  let x = document.querySelector('.x');
  x.style.left = String(event.clientX) + 'px';
  x.style.top = String(event.clientY) + 'px';
});

document.addEventListener('mousemove', event => {
  let x = document.querySelector('.x');
  x.style.left = event.clientX.toString() + 'px';
  x.style.top = event.clientY.toString() + 'px';
});

document.addEventListener('keyup', event => {
  let key = event.key;
  let color;

  if (key === 'r') {
    color = 'red';
  } else if (key === 'g') {
    color = 'green';
  } else if (key === 'b') {
    color = 'blue';
  }

  if (color) {
    let x = document.querySelector('.x');
    for (let index = 0; index < x.children.length; index += 1) {
      var child = x.children[index];
      child.style.background = color;
    }
  }
});

// Using the following code, write some JavaScript to add a character counter that updates as the user types.

document.addEventListener('DOMContentLoaded', () => {
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button = composer.querySelector('button');
  
  function updateCounter() {
    let length = textarea.value.length;
    let remaining = 140 - length;
    let message = `${remaining.toString()} characters remaining`;
    let invalid = remaining < 0;
    
    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;

    counter.textContent = message;    
  }
  
  textarea.addEventListener('keyup', updateCounter);
  
  updateCounter();
});
