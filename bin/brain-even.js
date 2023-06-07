import readlineSync from 'readline-sync';

function isDivisibleByTwo() {
  let correctAnswers = 0;
  let wrongAnswers = 0;

  while (correctAnswers < 3 && wrongAnswers < 3) {
    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Запросить у пользователя ввод "Yes" или "No"
    const answer = readlineSync.question(`Число ${randomNumber} делится на два? (Введите "Yes" или "No"): `);

    // Проверить ответ пользователя
    if (answer.toLowerCase() === 'yes' && randomNumber % 2 === 0) {
      correctAnswers += 1;
      console.log('Правильный ответ!');
    } else if (answer.toLowerCase() === 'no' && randomNumber % 2 !== 0) {
      correctAnswers += 1;
      console.log('Правильный ответ!');
    } else {
      wrongAnswers += 1;
      console.log('Неправильный ответ!');
    }
  }

  if (correctAnswers === 3) {
    console.log('Поздравляю! Вы дали три правильных ответа! Двигаемся дальше!');
    return true;
  } else {
    console.log('Вы дали три неправильных ответа. Игра окончена!');
    return false;
  }
}

export default isDivisibleByTwo();
