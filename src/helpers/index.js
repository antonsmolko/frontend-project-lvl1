export const getRandom = (range) => {
  return Math.round(Math.random() * range);
};

export const euclideGcd = (min, max) => {
  const diff = max % min;
  if (diff === 0) return min;
  return euclideGcd(diff, min);
};

export const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const next = i === 0 ? start : result[i - 1] + step;
    result.push(next);
  }

  return result;
};

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

export const isPrime = (number) => {
  const numberSqrt = ~~Math.sqrt(number);
  const delimeters = getAllPrimes(numberSqrt);

  for (let i = 0; i < delimeters.length; i += 1) {
    if (number % delimeters[i] === 0) return false;
  }

  return true;
};