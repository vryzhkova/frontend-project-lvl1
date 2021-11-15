#!/usr/bin/env node

import readlineSync from 'readline-sync';

function calculateValue() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}! `);
  console.log('What is the result of the expression?');
  // Получаем рандомное целое положительное число до 20
  const getRandomNumber = () => Math.floor(Math.random() * 10);

  // Получаем рандомный оператор
  const arrayOfOperators = ['+', '-', '*'];
  const randOperator = Math.floor(Math.random() * arrayOfOperators.length);
  const randOperatorValue = arrayOfOperators[randOperator];

  // Получаем рандомный оператор  СПОСОБ 2
  function getOperator(num1, num2, operators) {
    let result = '';
    switch (operators) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        break;
    }
    return result;
  }

  // Цикл - 3 игры
  for (let i = 1; i <= 3; i += 1) {
    const randomNumberFirst = getRandomNumber();
    const randomNumberTwo = getRandomNumber();
    getOperator(randomNumberFirst, randomNumberTwo, randOperatorValue);

    console.log(`Question: ${randomNumberFirst} ${randOperatorValue} ${randomNumberTwo}`);
    const userAnswer = readlineSync.question('You answer: ');
    const resultAll = String(getOperator(randomNumberFirst, randomNumberTwo, randOperatorValue));

    if (userAnswer === resultAll) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultAll}'. Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
}

calculateValue();
