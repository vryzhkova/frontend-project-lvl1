#!/usr/bin/env node

import runGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const OPERATORS = ['+', '-', '*'];

function getOperationResult(operator, leftOperand, rightOperand) {
  let result = null;
  switch (operator) {
    case '+':
      result = leftOperand + rightOperand;
      break;
    case '-':
      result = leftOperand - rightOperand;
      break;
    case '*':
      result = leftOperand * rightOperand;
      break;
    default:
      break;
  }
  return String(result);
}

const description = 'What is the result of the expression?';

function getBrainCalcGameData() {
  // Получаем рандомный оператор
  const randomIndex = Math.floor(Math.random() * OPERATORS.length);
  const operator = OPERATORS[randomIndex];

  const leftOperand = getRandomNumber();
  const rightOperand = getRandomNumber();

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const correctAnswer = getOperationResult(operator, leftOperand, rightOperand);

  return { question, correctAnswer };
}

runGame(description, getBrainCalcGameData);
