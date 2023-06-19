#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/index.js';

const user = greeting();

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function playGCD() {
  let correctAnswers = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (correctAnswers < 3) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);

    console.log(`Question: ${number1}, ${number2}`);

    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    const result = gcd(number1, number2);

    if (parseInt(userAnswer, 10) === result) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${user}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${user}!`);
  return true;
}

playGCD();
