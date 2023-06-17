#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function isDivisibleByTwo() {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"')
  while (correctAnswers < 3 && wrongAnswers < 3) {
    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Запросить у пользователя ввод "Yes" или "No"
    const answer = readlineSync.question(`Question: ${randomNumber} `);

    // Проверить ответ пользователя
    if (answer.toLowerCase() === 'yes' && randomNumber % 2 === 0) {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (answer.toLowerCase() === 'no' && randomNumber % 2 !== 0) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      wrongAnswers += 1;
      console.log('"yes" is wrong answer ;(. Correct answer was "No".');
    }
  }

  if (correctAnswers === 3) {
    console.log('Congratulation!');
    return true;
  } else {
    console.log('Let\'s try again!');
    return false;
  }
}

export default isDivisibleByTwo();
