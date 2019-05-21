'use strict';
const prompt = require('prompt');

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the results
const addition = function addition(num1, num2) {
  return parseInt(num1 + num2);
}

const subtraction = function subtraction(num1, num2) {
  return parseInt(num1 - num2);
}

const multiplication = function multiplication(num1, num2) {
  return parseInt(num1 * num2);
}

const division = function division(num1, num2) {
  return parseInt(num1 / num2);
}

const calculator = function calculator(error, result) {
  if (result.operation === '+') {
    result = addition(result.num1, result.num2);
  } else if (result.operation === '-') {
    result = subtraction(result.num1, result.num2);
  } else if (result.operation === '*') {
    result = multiplication(result.num1, result.num2);
  } else if (result.operation === '/') {
    result = division(result.num1, result.num2);
  }
  console.log(result);
}

prompt.get(['num1', 'num2','operation'], calculator);