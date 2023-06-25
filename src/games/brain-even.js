#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomNumber from '../rng.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

function makeRound() {
  const question = getRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

runEngine(rules, makeRound);
