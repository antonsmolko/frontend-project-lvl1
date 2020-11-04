import engine from '../index.js';
import getRandom from '../helpers/getRandom.js';

/**
 * Brains Calc
 * the user must solve the expression
 *
 * @param {number} range rande of valid values of numbers from 0
 *
 * @returns {Object} next round game state
 * @returns {string} round condition: mathematical expression
 * @returns {string} round correct answer: the result of evaluating an expression
 */
const generateRound = (range = 100) => {
  const calcMap = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
  };
  const operations = Object.keys(calcMap);

  const operation = operations[getRandom(operations.length - 1)];
  const num1 = getRandom(range);
  const num2 = getRandom(range);

  return {
    question: `${num1} ${operation} ${num2}`,
    correctAnswer: String(calcMap[operation](num1, num2)),
  };
};

export default engine(
  generateRound,
  'What is the result of the expression?',
);
