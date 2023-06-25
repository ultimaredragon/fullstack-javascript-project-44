#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomNumber from '../rng.js';

const rules = 'What number is missing in the progression?';
const lengthProgression = getRandomNumber(5, 10);

// Function for generating random ariphmetic progression
function generateArithmeticProgression(length) {
  const progression = [];
  const start = getRandomNumber(10, 50); // Generate random number for begining
  const difference = getRandomNumber(3, 7); // Generate difference in progression

  for (let i = 0; i < length; i += 1) {
    const number = start + i * difference;
    progression.push(number);
  }

  return progression;
}

function makeRound() {
  const progression = generateArithmeticProgression(lengthProgression);
  const hiddenNumber = getRandomNumber(0, lengthProgression - 1);

  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

runEngine(rules, makeRound);
