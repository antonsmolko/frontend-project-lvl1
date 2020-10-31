import { getRandom } from '../helpers.js';

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
export default (range = 100) => {
  const number = getRandom(range);

  return {
    clause: number,
    correctAnswer: !(number % 2) ? 'yes' : 'no',
  };
};
