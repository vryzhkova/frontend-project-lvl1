import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function getBrainEvenGameData() {
  const question = getRandomNumber();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer, description };
}

export default function runBrainEvenGame() {
  runGame(getBrainEvenGameData);
}
