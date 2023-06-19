#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/index.js';

const user = greeting();

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function performRandomOperation() {
  let correctAnswers = 0;
  console.log('What is the result of the expression?');

  while (correctAnswers < 3) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const operator = generateRandomOperator();

    let result;
    let expression;

    switch (operator) {
      case '+':
        result = number1 + number2;
        expression = `${number1} + ${number2}`;
        break;
      case '-':
        result = number1 - number2;
        expression = `${number1} - ${number2}`;
        break;
      case '*':
        result = number1 * number2;
        expression = `${number1} * ${number2}`;
        break;
    }

    const answer = readlineSync.question(`Question: ${expression} = `);

    if (parseInt(answer, 10) === result) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${user}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${user}!`);
  return true;
}

performRandomOperation();
