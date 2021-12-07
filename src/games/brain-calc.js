import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const OPERATORS = ['+', '-', '*'];

function getOperationResult(operator, leftOperand, rightOperand) {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
  }
}

const description = 'What is the result of the expression?';


function getQuestionAndAnswer() {
  const randomIndex = getRandomNumber(OPERATORS.length - 1, 0);
  const operator = OPERATORS[randomIndex];

  const leftOperand = getRandomNumber();
  const rightOperand = getRandomNumber();

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const correctAnswer = getOperationResult(operator, leftOperand, rightOperand);

  return { question, correctAnswer: String(correctAnswer) };
}

function getBrainCalcGameData() {
  return { description, getQuestionAndAnswer };
}

export default function runBrainCalcGame() {
  runGame(getBrainCalcGameData);
}
