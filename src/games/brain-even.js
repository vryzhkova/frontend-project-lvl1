import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

function getQuestionAndAnswer() {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
}

function getBrainEvenGameData() {
  return { description, getQuestionAndAnswer };
}

export default function runBrainEvenGame() {
  runGame(getBrainEvenGameData);
}
