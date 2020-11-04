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
 * Brains Progression
 * the user has to calculate the missing value
 * of the arithmetic progression
 *
 * @param {Object} options
 * @param {number} options.startRange range of valid values for the beginning of a sequence
 * @param {number} options.stepRange range of valid values for the step of a sequence
 * @param {number} options.sequenceRange range of valid values for the length of a sequence
 *
 * @returns {Object} next round game state
 * @returns {string} round condition: arithmetic progression with random hidden element
 * @returns {string} round correct answer: value of hidden element
 */
const generateRound = ({ startRange = 30, stepRange = 20, sequenceRange = 12 } = {}) => {
  const start = getRandom(startRange);
  const step = getRandom(stepRange, 3);
  const sequenceLength = getRandom(sequenceRange, 5);

  const progression = getProgression(start, step, sequenceLength);
  const hiddenIndex = getRandom(sequenceLength - 1);
  const correctAnswer = progression
    .splice(hiddenIndex, 1, '..')
    .toString();

  return {
    question: progression.join(' '),
    correctAnswer,
  };
};

export default engine(
  generateRound,
  description,
);
