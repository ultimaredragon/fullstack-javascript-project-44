#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import { getRandomNumber } from '../src/index.js';

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
  console.log('Find the greatest common divisor of given numbers.');

  while (correctAnswers < 3 && wrongAnswers < 3) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    console.log('Question: ', num1, num2);

    const userAnswer = parseInt(readlineSync.question('Your answer: '));

    const result = gcd(num1, num2);

    if (parseInt(userAnswer) === result) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${result}\'`);
      wrongAnswers += 1;
    }
  }

  if (correctAnswers === 3) {
    console.log('Congratulations!');
  } else {
    console.log('Let\'s try again!');
  }
}

playGCD();
