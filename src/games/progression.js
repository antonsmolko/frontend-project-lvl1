import engine from '../index.js';
import getRandom from '../helpers/getRandom.js';

/**
 * Returns a random arithmetic progression
 *
 * @param {number} start a number at which the arithmetic progression starts
 * @param {number} step a value of arithmetic progression step
 * @param {number} length a value of arithmetic progression length
 *
 * @return {array} an array whose values a numbers forming an arithmetic progression
 */
const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const next = i === 0 ? start : result[i - 1] + step;
    result.push(next);
  }

  return result;
};

/**
 * Game description
 *
 * @constant {string}
 */
const description = 'What number is missing in the progression?';

/**
 * Brain Progression
 * the user has to calculate the missing value
 * of the arithmetic progression
 *
 * @param {number} progressionRange range of valid values for the length of a sequence
 *
 * @returns {Object} next round game state
 * @returns {string} round condition: arithmetic progression with random hidden element
 * @returns {string} round expected answer: value of hidden element
 */
const generateRound = (progressionRange = 12) => {
  const start = getRandom(30);
  const step = getRandom(20, 3);
  const progressionLength = getRandom(progressionRange, 5);

  const progression = getProgression(start, step, progressionLength);
  const hiddenIndex = getRandom(progressionLength - 1);
  const expectedAnswer = progression
    .splice(hiddenIndex, 1, '..')
    .toString();

  return {
    question: progression.join(' '),
    expectedAnswer,
  };
};

export default engine(
  generateRound,
  description,
);
