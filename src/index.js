import readlineSync from 'readline-sync';

const MAX_ROUND_COUNT = 3;

export default function runGame(getGameData) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}! `);
  const { description } = getGameData();
  console.log(description);

  // Цикл - 3 игры
  for (let i = 1; i <= MAX_ROUND_COUNT; i += 1) {
    const { question, correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
