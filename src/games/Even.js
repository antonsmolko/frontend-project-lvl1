import { getRandom } from '../helpers/index.js';

export default () => {
  const range = 100;
  const number = getRandom(range);

  return {
    clause: number,
    correctAnswer: !(number % 2) ? 'yes' : 'no',
  };
};
