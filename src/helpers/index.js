export const getRandom = (range) => {
  return Math.round(Math.random() * range);
};

export const euclideGcd = (min, max) => {
  const diff = max % min;
  if (diff === 0) return min;
  return euclideGcd(diff, min);
};