#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function performRandomOperation() {
  let correctAnswers = 0;
  let wrongAnswers = 0;

  while (correctAnswers < 3 && wrongAnswers < 3) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
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

    const answer = readlineSync.question(`Решите задачу: ${expression} = `);
    if (parseInt(answer) === result) {
      correctAnswers += 1;
      console.log('Правильный ответ!');
    } else {
      wrongAnswers += 1;
      console.log('Неправильный ответ!');
    }
  }

  if (correctAnswers === 3) {
    console.log('Поздравляю! Вы дали три правильных ответа! Двигаемся дальше!');
  } else {
    console.log('Вы дали три неправильных ответа. Игра окончена!');
  }
}

performRandomOperation();
