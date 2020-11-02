import promptly from 'promptly';

/**
 * Return the result of checking whether user's answer is correct
 * @param {*} answer user answer
 * @param {*} corrected corrected answer
 * @return {boolean}
 */
const isCorrectAnswer = (answer, corrected) => answer === corrected;

/**
 * Game engine
 *
 * @param {Object} options
 * @param {string} options.ruleMessage game rule description
 * @param {function} options.game function with logic of the specific engine
 */
export default (round, descriptions) => async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(descriptions);

  const roundsCount = 3;

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, correctAnswer } = round();
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
};
