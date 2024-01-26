function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// Count the paragraphs on the page, and then log the result.
let count = 0;
walk(document, node => {
  if (node.nodeName === 'P') {
    count++;
  }
});

console.log(count);                              // 5

// Retrieve the first word from each paragraph on the page and log the entire list.
let words = [];
walk(document, node => {
  if (node.nodeName === 'P') {
    let text = node.firstChild.data.trim();
    let firstWord = text.split(' ')[0];
    words.push(firstWord);
  }
});

console.log(words);  // ["A", "The", "The", "Where", "And"]

// Add the class stanza to each paragraph except the first.
let first = true;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});

// Count the images on the page, then count the PNG images. Log both results.
let images = [];
walk(document, node => {
  if (node.nodeName === 'IMG') {
    images.push(node);
  }
});

console.log(images.length);                      // 48 total images

let pngCount = images.filter(img => img.getAttribute('src').match(/png$/)).length;

console.log(pngCount);                           // 23 images in png format

// Change the link color to red for every link on the page.
walk(document, node => {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});