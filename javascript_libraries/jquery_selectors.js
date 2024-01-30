// Use an element selector to find all h1 elements.

let h1 = $('h1');
h1.addClass('highlight');

// Use an ID selector to find the first h1 element.

$('#site_title')

// Use a descendant selector to find all the list items in the article element.

$('article').children().find('li').addClass('highlight');
$('article li').addClass('highlight');

// Find the third list item from the article element.

$('article li').eq(2).addClass('highlight');

// Find the table element, then find all the odd-numbered table rows in that element.

$('table tr').even().addClass('highlight');

// Find the list item that contains the text ac ante, then locate the parent li element.

$("li li:contains('ac ante')").parents('li').addClass('highlight');
// or
$('li li').filter(":contains('ac ante')").parents('li');

// Find the list item that contains the text ac ante, then find and return the next element.

$("li li:contains('ac ante')").next().addClass('highlight');

// Find all the table cells in the table, then find the last cell from the collection.

$('table td').last().addClass('highlight');

// Find all the table cells that do not have a class of "protected".

$("td:not('.protected')").addClass('highlight');
// or
$('td').not(".protected").addClass('highlight');

// Find all the anchor elements that have an href value that begins with #.

$('a[href^="#"]').addClass('highlight');

// Find all elements that have a class name that contains "block".

$('[class*="block"]').addClass('highlight');