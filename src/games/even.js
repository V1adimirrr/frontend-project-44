import { getRandomNumber, getEvenNumber, startGame } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const corectAnswer = () => {
  const number = getRandomNumber(25);
  const question = String(number);
  const answer = getEvenNumber(number) ? 'yes' : 'no';

  return [question, answer];
};

const brainEven = () => startGame(rules, corectAnswer);

export default brainEven;
