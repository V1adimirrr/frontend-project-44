import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeRound = () => {
  const number = getRandomNumber(0, 25);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const runBrainEven = () => runEngine(rules, makeRound);

export default runBrainEven;
