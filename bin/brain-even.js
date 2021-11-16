#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import runGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function getBrainEvenGameData() {
  const question = getRandomNumber();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
}

runGame(description, getBrainEvenGameData);
