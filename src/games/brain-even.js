import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;

function makeRound() {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () =>{
  runEngine(rules, makeRound);
}
