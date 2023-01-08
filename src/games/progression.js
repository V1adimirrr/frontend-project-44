import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, step, lengthProgression) => {
  const result = [];
  for (let i = 0; result.length < lengthProgression; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const makeRound = () => {
  const start = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);

  const hiddenIndex = getRandomNumber(0, length);
  const progression = getProgression(start, step, length);

  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runBrainPorgression = () => runEngine(rules, makeRound);

export default runBrainPorgression;
