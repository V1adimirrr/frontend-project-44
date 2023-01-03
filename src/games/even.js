import { getRandomNumber, startGame } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const corectAnswer = () => {
  const number = getRandomNumber(0, 25);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const brainEven = () => startGame(rules, corectAnswer);

export default brainEven;
