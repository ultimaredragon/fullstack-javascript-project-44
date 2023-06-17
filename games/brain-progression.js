#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Функция для генерации арифметической прогрессии
  function generateArithmeticProgression(length) {
    const progression = [];
    const start = getRandomNumber(1, 10); // Генерируем начальное число от 1 до 10
    const difference = getRandomNumber(1, 5); // Генерируем разность прогрессии от 1 до 5
  
    for (let i = 0; i < length; i++) {
      const number = start + i * difference;
      progression.push(number);
    }
  
    const hiddenIndex = getRandomNumber(0, length - 1); // Выбираем случайный индекс для скрытого числа
    const hiddenNumber = progression[hiddenIndex]; // Запоминаем скрытое число
    progression[hiddenIndex] = '..'; // Заменяем скрытое число двумя точками
  
    return { progression, hiddenNumber, hiddenIndex };
  }
  
  // Функция для запуска игры
  function startGame() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    while (correctAnswers < 3 && wrongAnswers <3) {
        const length = getRandomNumber(5, 10); // Генерируем случайную длину прогрессии от 5 до 10
        const { progression, hiddenNumber, hiddenIndex } = generateArithmeticProgression(length);
  
        console.log('Найдите скрытое число в арифметической прогрессии:');
        console.log(progression.join(', ')); 
          
        // Получаем ответ от игрока
        let answer = readlineSync.question('Введите ваш ответ: ');
    
        // Проверяем ответ игрока
        if (parseInt(answer) === hiddenNumber) {
        console.log('Правильный ответ!');
        correctAnswers += 1;
        } else {
        console.log(`К сожалению, неправильно. Правильный ответ: ${hiddenNumber}`);
        wrongAnswers += 1;
        }
    }

    if (correctAnswers === 3) {
        console.log('Поздравляю! Вы дали три правильных ответа! Двигаемся дальше!');
    } else {
        console.log('Вы дали три неправильных ответа. Игра окончена!');
    }
  }
  
  // Запуск игры
  startGame();
  