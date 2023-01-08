import { getRandomNumber, startGame } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const corectAnswer = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);

  return [question, String(answer)];
};

const runBrainGcd = () => startGame(rules, corectAnswer);

export default runBrainGcd;
