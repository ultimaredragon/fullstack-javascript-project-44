import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

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
      throw new Error(`Invalid operator - ${operator}`);
  }
}

function makeRound() {
  const randomOperator = getRandomOperator(operators);
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = String(calcOperation(randomOperator, number1, number2));

  return [question, correctAnswer];
}

export default () =>{
  runEngine(rules, makeRound);
}
