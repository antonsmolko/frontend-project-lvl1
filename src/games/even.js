import engine from '../index.js';
import getRandom from '../helpers/getRandom.js';

/**
 * Brains Even
 * the user must determine if the number is even
 *
 * @param {number} range rande of valid values of numbers from 0
 *
 * @returns {Object} next round game state
 * @returns {number} round condition: random number
 * @returns {string} round correct answer: 'yes', 'no'
 */
const generateRound = (range = 100) => {
  const number = getRandom(range);
  const isEven = (num) => num % 2 === 0;

  return {
    question: number,
    expectedAnswer: isEven(number) ? 'yes' : 'no',
  };
};

export default engine(
  generateRound,
  'Answer "yes" if the number is even, otherwise answer "no".',
);
