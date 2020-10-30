import promptly from 'promptly';

export default async ({ ruleMessage, game }) => {
  const name = await promptly.prompt('May I have you name?');
  console.log('Hello,', name);
  console.log(ruleMessage);

  let i = 1;
  while (i <= 3) {
    const { clause, correctAnswer } = game();
    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt(`Question: ${clause}`);
    console.log('You answer:', answer);

    const answerIsCorrect = answer === correctAnswer;
    const resultMessage = answerIsCorrect
      ? 'Correct!'
      : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;

    console.log(resultMessage);

    if (!answerIsCorrect) return;
    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
