import { getRandom } from '../helpers.js';

export default () => {
  const range = 100;
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
