import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Function for checking if the random number is prime
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

function makeRound() {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () =>{
  runEngine(rules, makeRound);
}
