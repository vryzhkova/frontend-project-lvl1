import readlineSync from 'readline-sync';

export default function runGame(description, getGameData) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}! `);

  console.log(description);

  // Цикл - 3 игры
  for (let i = 1; i <= 3; i += 1) {
    const { question, correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
