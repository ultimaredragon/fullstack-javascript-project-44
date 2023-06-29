import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

function generateArithmeticProgression(start, step, length) {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
}

function makeRound() {
  const start = getRandomNumber(10, 50); // Generate random number for begining
  const difference = getRandomNumber(3, 7); // Generate difference in progression
  const lengthProgression = getRandomNumber(5, 10);
  const progression = generateArithmeticProgression(start, difference, lengthProgression);
  const hiddenNumber = getRandomNumber(0, lengthProgression - 1);

  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => {
  runEngine(rules, makeRound);
};
