import promptly from 'promptly';

/**
 * Return the result of checking whether user's answer is correct
 * @param {*} answer user answer
 * @param {*} corrected corrected answer
 * @return {boolean}
 */
const isCorrectAnswer = (answer, corrected) => answer === corrected;

/**
 * Number of game rounds
 * @constant {number}
 */
const roundsCount = 3;

/**
 * Game engine
 *
 * @param {Object} options
 * @param {function} options.generateRound function with logic of the specific engine
 * @param {string} options.descriptions game rule description
 */
export default (generateRound, descriptions) => async () => {
  try {
    const name = await promptly.prompt('May I have your name?');
    console.log(`Hello, ${name}!`);
    console.log(descriptions);

    for (let i = 1; i <= roundsCount; i += 1) {
      const { question, correctAnswer } = generateRound();
      // eslint-disable-next-line no-await-in-loop
      const answer = await promptly.prompt(`Question: ${question}`);
      console.log('You answer:', answer);

      if (isCorrectAnswer(answer, correctAnswer)) {
        console.log('Correct!');
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }

    console.log(`Congratulations, ${name}!`);
  } catch (error) {
    console.log('exit');
  }
};
