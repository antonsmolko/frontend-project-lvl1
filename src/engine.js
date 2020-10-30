import promptly from 'promptly';

export default async ({ name, game, stepCount }) => {
  let i = 1;
  while(i <= stepCount) {
    const { clause, correctAnswer } = game.getNext()
    const answer = await promptly.prompt(`Question: ${clause}`);
    console.log('You answer:', answer);

    const answerIsCorrect = answer === correctAnswer;

    const message = answerIsCorrect
      ? 'Correct!'
      : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;

    console.log(message);

    if (!answerIsCorrect) return;

    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
}