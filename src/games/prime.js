import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const corectAnswer = () => {
  const randomNumber = getRandomNumber(2, 20);

  const question = String(randomNumber);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const runBrainPrime = () => startGame(rules, corectAnswer);

export default runBrainPrime;
