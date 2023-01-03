import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) =>
  Math.floor(min + Math.random() * (max - min - 1));

const startGame = (rules, corectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = corectAnswer(i);
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`
      );
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export { getRandomNumber, startGame };
