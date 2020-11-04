import engine from '../index.js';
import getRandom from '../helpers/getRandom.js';

/**
 * Euclid GCD
 * calculate the greatest common divisor
 *
 * @param {number} min fewer value
 * @param {number} max more value
 * @return {number} greatest common factor of @param min and @param max
 */
const getGcd = (min, max) => {
  const diff = max % min;
  if (diff === 0) return min;

  return getGcd(diff, min);
};

/**
 * Brains GCD
 * the user must calculate the greatest common divisor
 * of two numbers
 *
 * @param {number} range rande of valid values of numbers from 0
 *
 * @returns {Object} next round game state
 * @returns {string} round condition: two random numbers
 * @returns {string} round correct answer: greatest common divisor of these numbers
 */
const getRound = (range = 100) => {
  const a = getRandom(range, 1);
  const b = getRandom(range, 1);
  const [min, max] = [a, b].sort();

  return {
    question: `${a} ${b}`,
    correctAnswer: getGcd(min, max).toString(),
  };
};

export default engine(
  getRound,
  'Find the greatest common divisor of given numbers.',
);
