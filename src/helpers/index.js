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