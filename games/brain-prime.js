#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const user = greeting();

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function brainPrime() {
  let correctAnswers = 0;
  console.log('Answer "yes" if the number is prime, otherwise answer "no"');

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question:', ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isPrimeNumber = isPrime(randomNumber);
    const isCorrectAnswer = (isPrimeNumber && userAnswer.toLowerCase() === 'yes')
      || (!isPrimeNumber && userAnswer.toLowerCase() === 'no');

    if (isCorrectAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log('Wrong!');
      console.log(`Let's try again, ${user}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${user}!`);
  return true;
}

brainPrime();
