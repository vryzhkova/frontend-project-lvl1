import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getBrainPrimeGameData() {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer, description };
}

export default function runBrainPrimeGame() {
  runGame(getBrainPrimeGameData);
}
