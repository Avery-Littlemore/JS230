// document.addEventListener('DOMContentLoaded', () => {
//   let form = document.querySelector('form');
//   let submitButton = form.querySelector('input[value="="]');
//   let result = document.querySelector('#result');

//   submitButton.addEventListener('click', event => {
//     event.preventDefault();
//     let firstNum = +form.querySelector('#first-number').value;
//     let secondNum = +form.querySelector('#second-number').value;
//     let operator = form.querySelector('#operator').value;
//     let answer;

//     switch (operator) {
//       case '+':
//         answer = firstNum + secondNum;
//         break;
//       case '-':
//         answer = firstNum - secondNum;
//         break;
//       case '*':
//         answer = firstNum * secondNum;
//         break;
//       case '/':
//         answer = (firstNum / secondNum).toFixed(2);
//         break;
//     }

//     result.textContent = answer;
//   })
// });


document.addEventListener("DOMContentLoaded", function() {
  const Calculate = {
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
  };

  let form = document.querySelector("form");
  const getValueOf = (selector) => form.querySelector(selector).value;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstNumber = +getValueOf("#first-number");
    let secondNumber = +getValueOf("#second-number");
    let operator = getValueOf("#operator");

    let calculate = Calculate[operator];
    let answer = calculate(firstNumber, secondNumber);
    document.querySelector("#result").textContent = String(answer);
  });
});