import { getRandomNumber, startGame } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const corectAnswer = () => {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);

  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);

  return [question, String(answer)];
};

const brainGcd = () => startGame(rules, corectAnswer);

export default brainGcd;
