import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Operator ${operator} - is incorrect`);
  }
};

const makeRound = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);

  const operators = ['+', '-', '*'];
  // eslint-disable-next-line operator-linebreak
  const randomOperator = operators[getRandomNumber(0, operators.length + 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = String(calc(number1, number2, randomOperator));
  return [question, answer];
};

const runBrainCalc = () => runEngine(rules, makeRound);

export default runBrainCalc;
