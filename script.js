const resultDisplay = document.querySelector('#result');
const clear = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const addButton = document.querySelector('#add');
const equalsButton = document.querySelector('#equals');
const dotButton = document.querySelector('#dot');
const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';


clear.addEventListener('click', () => {
    resultDisplay.value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
});

deleteButton.addEventListener('click', () => {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
});

divideButton.addEventListener('click', () => {
    firstNumber = resultDisplay.value;
    operator = '/';
    resultDisplay.value = '';
});
multiplyButton.addEventListener('click', () => {
    firstNumber = resultDisplay.value;
    operator = '*';
    resultDisplay.value = '';
});
subtractButton.addEventListener('click', () => {
    firstNumber = resultDisplay.value;
    operator = '-';
    resultDisplay.value = '';
});

addButton.addEventListener('click', () => {
    firstNumber = resultDisplay.value;
    operator = '+';
    resultDisplay.value = '';
});
equalsButton.addEventListener('click', () => {
    secondNumber = resultDisplay.value;
    if (operator === '/') {
        result = firstNumber / secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '+') {
        result = Number(firstNumber) + Number(secondNumber);
    }
    resultDisplay.value = result;
});
dotButton.addEventListener('click', () => {
    resultDisplay.value += '.';
});
zeroButton.addEventListener('click', () => {
    resultDisplay.value += '0';
});
oneButton.addEventListener('click', () => {
    resultDisplay.value += '1';
});
twoButton.addEventListener('click', () => {
    resultDisplay.value += '2';
});
threeButton.addEventListener('click', () => {
    resultDisplay.value += '3';
});
fourButton.addEventListener('click', () => {
    resultDisplay.value += '4';
});
fiveButton.addEventListener('click', () => {
    resultDisplay.value += '5';
});
sixButton.addEventListener('click', () => {
    resultDisplay.value += '6';
});
sevenButton.addEventListener('click', () => {
    resultDisplay.value += '7';
});
eightButton.addEventListener('click', () => {
    resultDisplay.value += '8';
});
nineButton.addEventListener('click', () => {
    resultDisplay.value += '9';
});

