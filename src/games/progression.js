import { getRandomNumber, startGame } from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, step, lengthProgression) => {
  const result = [];
  for (let i = 0; result.length < lengthProgression; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const corectAnswer = () => {
  const start = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);

  const hiddenIndex = getRandomNumber(0, length);
  const progression = getProgression(start, step, length);

  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, String(answer)];
};

const runBrainPorgression = () => startGame(rules, corectAnswer);

export default runBrainPorgression;
