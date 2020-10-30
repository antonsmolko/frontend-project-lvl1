const getRandom = (range) => Math.round(Math.random() * range);

const getAllPrimes = (number) => {
  const numbers = Array(number).fill(true);

  for (let i = 2; i * i < number; i += 1) {
    if (numbers[i]) {
      for (let j = 2 * i; j < number; j += i) {
        numbers[j] = false;
      }
    }
  }

  const primes = [];

  for (let i = 2; i < numbers.length; i += 1) {
    if (numbers[i]) primes.push(i);
  }

  return primes;
};

const isPrime = (number) => {
  const numberSqrt = Math.floor(Math.sqrt(number));
  const delimeters = getAllPrimes(numberSqrt);

  for (let i = 0; i < delimeters.length; i += 1) {
    if (number % delimeters[i] === 0) return false;
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
