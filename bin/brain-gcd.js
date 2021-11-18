#!/usr/bin/env node

import runGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGreatestCommonDivisor(a, b) {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

function getBrainGcdGameData() {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = findGreatestCommonDivisor(firstRandomNumber, secondRandomNumber);

  return { question, correctAnswer };
}

runGame(description, getBrainGcdGameData);
