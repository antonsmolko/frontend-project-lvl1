import { getRandom } from '../helpers.js';

const getGcd = (min, max) => {
  const diff = max % min;
  if (diff === 0) return min;
  return getGcd(diff, min);
};

export default (range = 100) => {
  const a = getRandom(range, 1);
  const b = getRandom(range, 1);
  const [min, max] = [a, b].sort();

  return {
    clause: `${a} ${b}`,
    correctAnswer: getGcd(min, max).toString(),
  };
};
