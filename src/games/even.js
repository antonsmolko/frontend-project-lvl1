import { getRandom } from '../helpers.js';

export default (range = 100) => {
  const number = getRandom(range);

  return {
    clause: number,
    correctAnswer: !(number % 2) ? 'yes' : 'no',
  };
};
