import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

function generateArithmeticProgression(startNumber, progressionLength, progressionStep) {
  const progression = [];
  for (let i = startNumber; progression.length <= progressionLength; i += progressionStep) {
    progression.push(i);
  }
  return progression;
}

function getBrainProgressionGameData() {
  return {
    description,
    getQuestionAndAnswer: () => {
      const startNumber = getRandomNumber(100);
      const step = getRandomNumber(5);
      const length = getRandomNumber(10, 5);
      const arithmeticProgression = generateArithmeticProgression(startNumber, length, step);
      const hiddenNumberIndex = getRandomNumber(length);
      const hiddenNumber = arithmeticProgression[hiddenNumberIndex];
      arithmeticProgression[hiddenNumberIndex] = '..';
      return {
        question: arithmeticProgression.join(' '),
        correctAnswer: String(hiddenNumber),
      };
    },
  };
}

export default function runBrainProgressionGame() {
  runGame(getBrainProgressionGameData);
}
