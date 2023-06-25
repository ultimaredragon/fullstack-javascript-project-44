#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomNumber from '../rng.js';

const rules = 'Find the greatest common divisor of given numbers.';

//Function for finding greatest common divisior
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

function makeRound() {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));

  return [question, correctAnswer];
};

runEngine(rules, makeRound);
