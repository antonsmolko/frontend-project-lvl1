export const getRandom = (range, min = 0) => (
  Math.round(Math.random() * (range - min) + min)
);

export default {
  getRandom,
};
