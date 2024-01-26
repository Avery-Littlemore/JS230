// Write a JavaScript function that adds the class article-text to every <p> tag in this HTML:
function addClassArticleText(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  let nodes = node.childNodes;
  for (let i = 0; i < nodes.length; i += 1) {
    addClassArticleText(nodes[i]);
  }
}

addClassArticleText(document.body);

// The solution to the previous problem does everything in one function. It works, but if we need to perform a similar operation later, 
// we must write most of the same code again. We can do better by rethinking the problem.

// You can think of the problem as having two primary operations: find all the p elements, and then add a class to each of them. 
// We can structure our code similarly; this makes the code's intent clearer to other developers and increases the reusability of the components.

// Using this task breakdown, rewrite the solution to the first problem. The core of your solution should be a function named 
// getElementsByTagName that returns an array of all elements with a given tag name. You should then add the CSS class article-text 
// to each paragraph in the array.

function getElementsByTagName(node, tag, array = []) {
  let nodes = node.childNodes;
  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i] instanceof tag) {
      array.push(nodes[i]);
    }
    getElementsByTagName(nodes[i], tag, array);
  }
  
  return array;
}

function addClassToElements(elements) {
  elements.forEach(element => element.classList.add('article-text'));
}

addClassToElements(getElementsByTagName(document.body, HTMLParagraphElement))

// alternate

function getElementsByTagName(tagName) {
  let matches = [];

  walk(document.body, (node) => {
    if (node.nodeName.toLowerCase() === tagName) {
      matches.push(node);
    }
  });

  return matches;
}

getElementsByTagName("p").forEach((paragraph) =>
  paragraph.classList.add("article-text")
);

// with document.getElementsByTagName method

[].slice.call(document.getElementsByTagName("p")).forEach(paragraph => paragraph.classList.add('article-text'));

// Let's make the previous problem more realistic. 
// Instead of adding the article-text class to every paragraph on the page, 
// let's restrict it to only the paragraphs inside a <div class="intro"> tag. 
// How can we do this? Keep in mind that you can call getElementsByClassName 
// and getElementsByTagName on any element; document is handiest when you need 
// all matching elements from the page, but you can use any other element if 
// you don't need everything on the page.

// Update the code from Problem 1 to add the article-text class to paragraphs inside <div class="intro">, and nowhere else.
let intros = document.getElementsByClassName('intro');

for (let i = 0; i < intros.length; i += 1) {
  let paragraphs = intros[i].getElementsByTagName('p');

  [].slice.call(paragraphs).forEach(paragraph => paragraph.classList.add('article-text'));
}

// using querySelectorAll
let paragraphs = document.querySelectorAll(".intro p");
for (let index = 0; index < paragraphs.length; index += 1) {
  paragraphs[index].classList.add("article-text");
}