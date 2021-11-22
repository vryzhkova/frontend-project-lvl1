#!/usr/bin/env node

import runGame from '../src/index.js';
// import getRandomNumber from '../src/getRandomNumber.js';

const description = 'What number is missing in the progression?';

// const MINCOUNT = 1;
// const MINLENGTH = 5;
const MAXCOUNT = 10;

// Создаем рандомный массив их 10 последовательных чисел
function getArithmeticProgression() {
  const randomNumber = Math.floor(Math.random() * 100);
  const randomStep = Math.floor(Math.random() * 5);
  const result = [];

  for (let i = randomNumber; result.length < MAXCOUNT; i += randomStep) {
    result.push(i);
  }
  return result;
}

// Заменяем рандомное число в массиве '..'
function createHiddenElement(arr) {
  const num = Math.floor(Math.random() * 10);
  const i = num;
  const answer = arr[i];
  answer = '..';
  return arr.join(' ');
}

// Ищем спрятанное число
function getHiddenElement() {
  return createHiddenElement(arr)
}

function getBrainProgressionGameData() {
  const question = createHiddenElement(getArithmeticProgression());
  const correctAnswer = ;

  return { question, correctAnswer };
}

runGame(description, getBrainProgressionGameData);
