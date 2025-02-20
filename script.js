// Functions for basic math operators

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Can't divide by 0";
    }
    return a / b;
}

// Creating a new function  that takes an operator and two numbers
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }
  }
  


let firstNum = null;
let secondNum = null;
let operator = null;
let shouldResetDisplay = false;

function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (display.value === "0" || shouldResetDisplay) {
      display.value = value;
      shouldResetDisplay = false;
  } else {
      display.value += value;
  }
}

function setOperator(op) {
  if (firstNum === null) {
      firstNum = parseFloat(document.getElementById('display').value);
      operator = op;
      shouldResetDisplay = true;
  } else if (operator) {
      // If operator already set, just update it
      operator = op;
  } else {
      // If no second number yet, ignore
  }
}

function calculateResult() {
  if (firstNum !== null && operator) {
      secondNum = parseFloat(document.getElementById('display').value);
      const result = operate(operator, firstNum, secondNum);
      document.getElementById('display').value = result;
      firstNum = result;  // Use the result for the next operation
      operator = null;    // Reset operator
      secondNum = null;   // Reset second number
      shouldResetDisplay = true;
  }
}

function clearDisplay() {
  document.getElementById('display').value = "0";
  firstNum = null;
  secondNum = null;
  operator = null;
}