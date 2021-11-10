#!/usr/bin/env node

import readlineSync from 'readline-sync';

function evenOrOdd() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}! `);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // Получаем рандомное целое положительное число до 100
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  // Цикл - 3 игры
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('You answer: ');

    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      return;
    }
    // Конец цикла
    console.log(`Congratulations, ${name}!`);
  }
}

evenOrOdd();
