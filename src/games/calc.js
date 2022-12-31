import { getRandomNumber, startGame } from '../index.js';

const rules = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, operators) => {
  switch (operators) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const corectAnswer = () => {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);

  const operators = ['+', '-', '*'];
  const getRandomOperators = operators[getRandomNumber(operators.length)];

  const question = `${number1} ${getRandomOperators} ${number2}`;
  const answer = calc(number1, number2, getRandomOperators);
  return [question, String(answer)];
};

const brainCalc = () => startGame(rules, corectAnswer);

export default brainCalc;
