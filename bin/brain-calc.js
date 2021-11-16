#!/usr/bin/env node

import runGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const description = 'What is the result of the expression?';

function getBrainCalcGameData() {
  // Получаем рандомный оператор
  const arrayOfOperators = ['+', '-', '*'];
  const randOperator = Math.floor(Math.random() * arrayOfOperators.length);
  const randOperatorValue = arrayOfOperators[randOperator];

  const randomNumberFirst = getRandomNumber();
  const randomNumberTwo = getRandomNumber();

  // Получаем рандомное выражение
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

  const question = `${randomNumberFirst} ${randOperatorValue} ${randomNumberTwo}`;
  const correctAnswer = String(getOperator(randomNumberFirst, randomNumberTwo, randOperatorValue));

  return { question, correctAnswer };
}

runGame(description, getBrainCalcGameData);
