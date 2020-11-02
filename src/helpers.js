/**
 * Returns a random number in a given range
 *
 * @param {numver} range max valid value of number
 * @param {number} min min valid value of number
 *
 * @return {number} random number
 */
export const getRandom = (range, min = 0) => (
  Math.round(Math.random() * (range - min) + min)
);

/**
 * Game engine wrapper function
 *
 * @param {function} engine function with game engine
 */
export const gameWrapper = (engine) => {
  engine().catch(() => console.log('exit'));
};
