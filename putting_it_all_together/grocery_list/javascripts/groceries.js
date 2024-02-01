(function groceryListManager() {
  class GroceryList {
    constructor(listContainerElement) {
      this.list = document.querySelector(listContainerElement);
    }

    addItem(name, quantity) {
      var listItem = document.createElement("li");
      listItem.append(`${quantity} ${name}`);

      this.list.append(listItem);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let myGroceryList = new GroceryList("#grocery-list");
    const getValueOf = (selector) => form.querySelector(selector).value;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let name = getValueOf("#name");
      let quantity = getValueOf("#quantity") || "1";

      myGroceryList.addItem(name, quantity);
      form.reset();
    });
  });
})();

// document.addEventListener("DOMContentLoaded", function() {
//   let form = document.querySelector("form");
//   const getValueOf = (selector) => form.querySelector(selector).value;

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let name = getValueOf("#name");
//     form.querySelector('#name').value = '';

//     let quantity = getValueOf("#quantity") || '1';
//     form.querySelector('#quantity').value = '';

//     let element = document.createElement('li');
//     element.textContent = `${quantity} ${name}`;
    
//     document.querySelector("#grocery-list").appendChild(element);

    
//   });
// });