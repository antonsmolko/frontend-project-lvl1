import { getRandom } from '../helpers.js';

const isPrime = (number) => {
  if (number < 2) return false;

  if (number % 2 === 0) return number === 2;

  if (number % 3 === 0) return number === 3;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
};

export default () => {
  const range = 100;
  const number = getRandom(range);

  return {
    clause: number,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  };
};
