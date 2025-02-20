let firstNum = null;
let secondNum = null;
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === "0" || shouldResetDisplay) {
        display.value = value;
        shouldResetDisplay = false;
    } else {
        display.value += value;
    }
}

function setOperator(op) {
    if (firstNum === null) {
        firstNum = parseFloat(display.value);
        operator = op;
        shouldResetDisplay = true;
    } else if (operator) {
        // If an operator is already set, calculate the result first
        secondNum = parseFloat(display.value);
        const result = operate(operator, firstNum, secondNum);
        display.value = result; // Show result
        firstNum = result;      // Use result as first number for next operation
        operator = op;         // Set new operator
        secondNum = null;      // Reset second number
        shouldResetDisplay = true; // Prepare display for next input
    } else {
        // Update the operator if no second number is set
        operator = op;
        shouldResetDisplay = true; // Reset display for next number
    }
}

function calculateResult() {
    if (firstNum !== null && operator) {
        secondNum = parseFloat(display.value);
        const result = operate(operator, firstNum, secondNum);
        display.value = result;
        firstNum = result; // Use result for the next operation
        operator = null;   // Reset operator
        secondNum = null;  // Reset second number
        shouldResetDisplay = true;
    }
}

function clearDisplay() {
    display.value = "0";
    firstNum = null;
    secondNum = null;
    operator = null;
}

// Basic math functions
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