#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomNumber from '../rng.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// Generate random arifmetic operator
function getRandomOperator(operatorsMassive) {
  const operatorsLength = operatorsMassive.length - 1;
  const randomIndex = getRandomNumber(0, operatorsLength);
  const randomOperator = operatorsMassive[randomIndex];
  return randomOperator;
}

// Switch for arifmetic operaion
function calcOperation(operator, firstValue, secondValue) {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return null;
  }
}

function makeRound() {
  const randomOperator = getRandomOperator(operators);
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `Question: ${number1} ${randomOperator} ${number2} = `;
  const correctAnswer = String(calcOperation(randomOperator, number1, number2));

  return [question, correctAnswer];
}

runEngine(rules, makeRound);
