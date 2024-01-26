// Write some JavaScript code to retrieve a word count for each h2 heading on the page.
let arrayLike = document.querySelectorAll('h2');
[].slice.call(arrayLike).map(header => header.textContent.split(' ').length);

// The page has a table of contents with the title "Contents" and links to the different content sections on 
// "Naming and etymology," "Taxonomy and evolution," etc.

// Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.
document.getElementById('toc');
document.querySelector('#toc');
document.querySelectorAll('.toc')[0];

// Write some JavaScript code to change the color for every odd indexed link in the table of contents to green.
let anchors = document.querySelectorAll('.toc a');

[].slice.call(anchors).forEach(anchor => {
  if (anchor.firstChild.textContent % 2 === 0) {
    anchor.style.color = 'green';
  }
});

// Write some JavaScript code to retrieve the text of every thumbnail caption on the page.
let nodes = document.querySelectorAll('.thumbcaption');
let captions = [];

for (let index = 0; index < nodes.length; index += 1) {
  captions.push(nodes[index].textContent.trim());
}

console.log(captions);

// You can think of the scientific classification of an animal as a series of key-value pairs. 
// Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, etc.). 
// The values are the specific groups to which the animal belongs.

// Write JavaScript code that extracts the classification of animals from the web page and logs an 
// Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks 
// to use as keys is provided for you as an array.
let ranks = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
let tds = document.querySelectorAll('.infobox td');
let result = {};

for (let i = 0; i < tds.length; i += 1) {
  ranks.forEach(rank => {
    let regex = new RegExp(rank, '');
    if (tds[i].textContent.match(regex)) {
      result[rank] = tds[i].nextElementSibling.firstElementChild.textContent;
    };
  });
}

console.log(result);
// .nextElementSibling