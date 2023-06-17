#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function brainPrime() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
  
    while (correctAnswers < 3 && wrongAnswers < 3) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      const userAnswer = readlineSync.question(`Простое ли число ${randomNumber}? (Введите "yes" или "no") `);
  
      const isPrimeNumber = isPrime(randomNumber);
      const isCorrectAnswer = (isPrimeNumber && userAnswer.toLowerCase() === 'yes') ||
        (!isPrimeNumber && userAnswer.toLowerCase() === 'no');
  
      if (isCorrectAnswer) {
        correctAnswers += 1;
        console.log('Правильный ответ!');
      } else {
        wrongAnswers += 1;
        console.log('Неправильный ответ!');
      }
    }
  
    if (correctAnswers === 3) {
        console.log('Поздравляю! Вы дали три правильных ответа! Двигаемся дальше!');
      } else {
        console.log('Вы дали три неправильных ответа. Игра окончена!');
      }
  }
  
  brainPrime();
  