import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;

// Создаем рандомный массив их 10 последовательных чисел

// function generateArithmeticProgression(startNumber, progressionLength, progressionStep) {
//   return []
// }

function getQuestionAndAnswer() {
  const startNumber = getRandomNumber(100);
  const step = getRandomNumber(5);
  const progression = [];

  for (let i = startNumber; progression.length < PROGRESSION_LENGTH; i += step) {
    progression.push(i);
  }
  // Заменяем рандомное число в массиве  двумя точками '..'
  const num = getRandomNumber(PROGRESSION_LENGTH);
  const i = num;
  const correctAnswer = String(progression[i]);
  progression[i] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
}

function getBrainProgressionGameData() {
  // return { description,  getQuestionAndAnswer: () => {
  //   const startNumber = getRandomNumber(100);
  //   const progressionStep = getRandomNumber(5);
  //   const progressionLength = getRandomNumber(10, 5);
  //   const arithmeticProgression = generateArithmeticProgression(startNumber, progressionLength, progressionStep);
  
  //   const hiddenNumberIndex = getRandomNumber(progressionLength);

  //   const hiddenNumber = arithmeticProgression[hiddenNumberIndex];

  //   arithmeticProgression[hiddenNumberIndex] = '..'

  //   return {
  //     question: arithmeticProgression.join(' '),
  //     correctAnswer: hiddenNumber,
  //   }
  // } };
}

export default function runBrainProgressionGame() {
  runGame(getBrainProgressionGameData);
}
