#!/usr/bin/env node

import runGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNumber.js';

const description = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;

// Создаем рандомный массив их 10 последовательных чисел
function getArithmeticProgression() {
  const startNumber = getRandomNumber(100);
  const step = getRandomNumber(5);
  const progression = [];

  for (let i = startNumber; progression.length < PROGRESSION_LENGTH; i += step) {
    progression.push(i);
  }
  return progression;
}

// Заменяем рандомное число в массиве '..'
function createHiddenElement(arr) {
  const num = Math.floor(Math.random() * 10);
  const i = num;
  const answer = String(arr[i]);
  arr[i] = '..';
  const stringArr = arr.join(' ');
  return { stringArr, answer };
}

function getBrainProgressionGameData() {
  const { stringArr, answer } = createHiddenElement(getArithmeticProgression());

  return { question: stringArr, correctAnswer: answer };
}

runGame(description, getBrainProgressionGameData);
