#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function playGCD() {
  let correctAnswers = 0;
  let wrongAnswers = 0;

  while (correctAnswers < 3 && wrongAnswers < 3) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    console.log('Какой наибольший делитель у следующих двух чисел?', num1, num2);

    const userAnswer = parseInt(readlineSync.question('Введите наибольший общий делитель: '));

    const result = gcd(num1, num2);

    if (parseInt(userAnswer) === result) {
      console.log('Правильно!');
      correctAnswers += 1;
    } else {
      console.log('Неправильно!');
      wrongAnswers += 1;
    }
  }

  if (correctAnswers === 3) {
    console.log('Поздравляю! Вы дали три правильных ответа! Двигаемся дальше!');
  } else {
    console.log('Вы дали три неправильных ответа. Игра окончена!');
  }
}

playGCD();
