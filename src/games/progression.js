import { getRandom } from '../helpers.js';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const next = i === 0 ? start : result[i - 1] + step;
    result.push(next);
  }

  return result;
};

export default ({ startRange = 30, stepRange = 20, sequenceRange = 12 } = {}) => {
  const start = getRandom(startRange);
  const step = getRandom(stepRange, 3);
  const sequenceLength = getRandom(sequenceRange, 5);

  const progression = getProgression(start, step, sequenceLength);
  const hiddenIndex = getRandom(sequenceLength - 1);
  const correctAnswer = progression
    .splice(hiddenIndex, 1, '..')
    .toString();

  return {
    clause: progression.join(' '),
    correctAnswer,
  };
};
