let header = document.querySelector('body > header');
let h1 = document.querySelector('main > h1');
let nav = document.querySelector('body > header > nav');
header.insertBefore(h1, nav);

let main = document.querySelector('body > main');

document.body.insertBefore(header, main);

let [chinStickFigure, babyMopFigure ] = document.querySelectorAll('figure');
let babyMopImage = chinStickFigure.querySelector("img");
let chinStickImage = babyMopFigure.querySelector("img");
chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);
babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

let article = document.querySelector("article");
article.insertBefore(chinStickFigure, null);
article.insertBefore(babyMopFigure, null);