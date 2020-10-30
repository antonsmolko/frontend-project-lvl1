import { getRandom } from '../helpers.js';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const next = i === 0 ? start : result[i - 1] + step;
    result.push(next);
  }

  return result;
};

export default () => {
  const startRange = 30;
  const stepRange = 20;
  const sequenceRange = 15;

  const randomStart = getRandom(startRange);
  const randomStep = getRandom(stepRange);
  const randomSequenceLength = getRandom(sequenceRange);
  const sequenceLength = randomSequenceLength >= 5 ? randomSequenceLength : 5;
  const progression = getProgression(randomStart, randomStep, sequenceRange);
  const hiddenIndex = getRandom(sequenceLength - 1);
  const correctAnswer = progression
    .splice(hiddenIndex, 1, '..')
    .toString();

  return {
    clause: progression.join(' '),
    correctAnswer,
  };
};
