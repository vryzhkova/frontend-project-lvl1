#!/usr/bin/env node

import runGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  let value = '';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      value = 'false';
    }
    value = 'true';
  }
  return value;
}

function getBrainPrimeGameData() {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) === 'true' ? 'yes' : 'no';

  return { question, correctAnswer };
}

runGame(description, getBrainPrimeGameData);
