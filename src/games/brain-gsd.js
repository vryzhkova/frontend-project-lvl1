import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGreatestCommonDivisor(firstValue, secondValue) {
  let a = firstValue;
  let b = secondValue;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

function getQuestionAndAnswer() {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = String(findGreatestCommonDivisor(firstRandomNumber, secondRandomNumber));

  return { question, correctAnswer };
}

function getBrainGcdGameData() {
  return { description, getQuestionAndAnswer };
}

export default function runBrainGcdGame() {
  runGame(getBrainGcdGameData);
}
