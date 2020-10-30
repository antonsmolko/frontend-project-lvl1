import { getRandom } from '../helpers/index.js';

const euclideGcd = (min, max) => {
  const diff = max % min;
  if (diff === 0) return min;
  return euclideGcd(diff, min);
};

export default () => {
  const range = 100;

  const a = getRandom(range);
  const b= getRandom(range);
  const [min, max] = [a, b].sort();

  return {
    clause: `${a} ${b}`,
    correctAnswer: euclideGcd(min, max).toString(),
  };
}