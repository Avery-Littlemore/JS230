// Use JavaScript to set a class of 'heading' to the heading (the h1 element).
document.getElementById('primary_heading').setAttribute('class', 'heading');

// Use JavaScript to set the class of the ul element to 'bulleted'.
document.querySelector('#list').setAttribute('class', 'bulleted');

// In this problem and the next, we'll use the onclick element property, which corresponds to a similarly named
// attribute on HTML tags. You don't need to know much about onclick right now. Normally, you won't (and shouldn't) 
// use it in in modern code. The onclick attribute can be set for a DOM element by setting the onclick property of 
// the element to a function that will be invoked when the user clicks on the corresponding element.

// Our page has an element that you can't see initially; it's hidden. When the user clicks the link, the browser should 
// display the hidden item; the next click on that link should hide the revealed item. Each click should toggle the 
// hidden element between the visible and hidden states.

// Use the Inspector to find the hidden element and determine its ID. Following this, set the onclick property on the 
// link with an ID of toggle to a function that makes the element visible when it's hidden and hides it when it's visible. 
// You can use getAttribute to access the class, and setAttribute to set it; the class names of interest are 'visible' and 'hidden'.

// You will have to write a multi-line expression in the console. To do this, hold the Shift key down when you press Enter. 
// Otherwise, the browser will try to execute your partial code and raise an error.

// Your function should take a single argument, e. The first line of your function should invoke e.preventDefault. 
// We'll discuss this later when we talk more about events, but, for now, just be aware that preventDefault tells 
// your browser that it shouldn't try to follow the link.
document.getElementById('toggle').onclick = (e) => {
  e.preventDefault();
  let toggleElement = document.getElementById('notice');
  if (toggleElement.classList.contains('hidden')) {
    toggleElement.classList.remove('hidden');
  } else {
    toggleElement.classList.add('hidden');
  }
}

// Add an onclick event to the element we show and hide above. This time, the function should set the class of the element to 'hidden'. 
// This event will let you hide the visible element by clicking on it. As with the previous function, the first thing the function should 
// do is invoke e.preventDefault.
document.getElementById('notice').onclick = e => {
  e.preventDefault();
  e.currentTarget.classList.add('hidden');
}

// Locate the multiplication paragraph and change the text to the result of the arithmetic problem.
document.getElementById('multiplication').textContent = 13 * 9;

// Set the ID of the body element to 'styled' to apply the rest of the styles from the original file. 
// The body tag in this file doesn't have an ID, so you must locate it by some other means.
document.querySelector('body').setAttribute('id', 'styled');
