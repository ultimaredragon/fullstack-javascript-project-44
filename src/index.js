import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

function runEngine(rules, makeRound) {
  const user = greeting();
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }

  console.log(`Congratulations, ${user}!`);
}

export default runEngine;
