import { getRandom } from '../helpers.js';

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
export default (range = 100) => {
  const calcMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const operations = Object.keys(calcMap);

  const op = operations[getRandom(operations.length - 1)];
  const a = getRandom(range);
  const b = getRandom(range);

  return {
    clause: `${a} ${op} ${b}`,
    correctAnswer: String(calcMap[op](a, b)),
  };
};
