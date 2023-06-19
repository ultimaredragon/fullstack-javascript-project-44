#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import getRandomNumber from '../src/index.js';

const user = greeting();

// Функция для генерации арифметической прогрессии
function generateArithmeticProgression(length) {
  const progression = [];
  const start = getRandomNumber(1, 10); // Генерируем начальное число от 1 до 10
  const difference = getRandomNumber(1, 5); // Генерируем разность прогрессии от 1 до 5

  for (let i = 0; i < length; i += 1) {
    const number = start + i * difference;
    progression.push(number);
  }

  const hiddenIndex = getRandomNumber(0, length - 1); // Случайный индекс для скрытого числа
  const hiddenNumber = progression[hiddenIndex]; // Запоминаем скрытое число
  progression[hiddenIndex] = '..'; // Заменяем скрытое число двумя точками

  return { progression, hiddenNumber, hiddenIndex };
}

// Функция для запуска игры
function startGame() {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  console.log('What number is missing in the progression?');

  while (correctAnswers < 3 && wrongAnswers < 3) {
    const length = getRandomNumber(5, 10); // Генерируем случайную длину прогрессии от 5 до 10
    const { progression, hiddenNumber, hiddenIndex } = generateArithmeticProgression(length);

    console.log(`Question: ${progression.join(', ')}`);

    // Получаем ответ от игрока
    const answer = readlineSync.question('Your answer: ');

    // Проверяем ответ игрока
    if (parseInt(answer, 10) === hiddenNumber) {
      console.log('Corect!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'`);
      wrongAnswers += 1;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`Let's try again, ${user}!`);
  }
}

startGame();
