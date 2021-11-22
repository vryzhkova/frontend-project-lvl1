import runGame from '../src/index.js';
// import getRandomNumber from '../src/getRandomNumber.js';

const description = 'What number is missing in the progression?';

// const MINCOUNT = 1;
// const MINLENGTH = 5;
const MAXCOUNT = 10;

function getArithmeticProgression() {
  const randomNumber = Math.floor(Math.random() * 100);
  const randomStep = Math.floor(Math.random() * 5);

  const result = [];

  for (let i = randomNumber; result.length < MAXCOUNT; i += randomStep) {
    result.push(i);
  }

  return result;
}

function createHiddenElement(arr) {

}

function getBrainProgressionGameData() {
  const question = getArithmeticProgression();
  const correctAnswer = NaN;

  return { question, correctAnswer };
}

runGame(description, getBrainProgressionGameData);
