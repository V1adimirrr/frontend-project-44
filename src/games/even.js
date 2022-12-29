import readlineSync from 'readline-sync';

const getRandomNumebr = (max) => Math.floor(Math.random() * max);

const getEvenNumber = (number) => number % 2 === 0;

const corectAnswer = (number, userAnswer) => {
  const possibleAnswers = ['yes', 'no'];

  let flag;
  if (getEvenNumber(number) === true && userAnswer === possibleAnswers[0]) {
    flag = true;
  } else if (
    getEvenNumber(number) === false &&
    userAnswer === possibleAnswers[1]
  ) {
    flag = true;
  }

  return flag;
};

const tryAgain = (answer, userName) => {
  if (answer === 'yes') {
    return console.log(
      `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
    );
  }
  return console.log(
    `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`
  );
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumebr(100);
    console.log('Question:', randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');

    if (corectAnswer(randomNumber, userAnswer)) {
      console.log('Correct!');
    } else if (!corectAnswer(randomNumber, userAnswer)) {
      return tryAgain(userAnswer, userName);
    }
  }

  return console.log(`${'Congratulations,'} ${userName}!`);
};

export default brainEven;
