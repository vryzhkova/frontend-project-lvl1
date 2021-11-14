#!/usr/bin/env node

import readlineSync from 'readline-sync';

function calculateValue() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}! `);
  console.log('What is the result of the expression?');
  // Получаем рандомное целое положительное число до 20
  const getRandomNumber = () => Math.floor(Math.random() * 20);

  // Получаем рандомный оператор
  const arrayOfOperators = ['+', '-', '*'];
  const randOperator = Math.floor(Math.random() * arrayOfOperators.length);
  const randOperatorValue = arrayOfOperators[randOperator];

  // Цикл - 3 игры
  for (let i = 1; i <= 3; i += 1) {
    const randomNumberFirst = getRandomNumber();
    const randomNumberTwo = getRandomNumber();

    console.log(`Question: ${randomNumberFirst} ${randOperatorValue} ${randomNumberTwo}`);
    const resultCalculateValue = eval(`${randomNumberFirst}${randOperatorValue}${randomNumberTwo}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === resultCalculateValue) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultCalculateValue}'. Let's try again, ${name}!`);
      return;
    }
  }
}

calculateValue();
