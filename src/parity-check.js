import promptly from 'promptly';

const isEven = (number) => !Boolean(number % 2);
const getCorrectAnswer = (isEven) => isEven ? 'yes' : 'no';

const game = () => new Promise(async (resolve) => {
  const randNumber = Math.floor(Math.random() * 100);
  const answer = await promptly.prompt(`Question: ${randNumber}`);

  console.log('You answer:', answer);

  const isEvenNumber = isEven(randNumber);
  const correctAnswer = getCorrectAnswer(isEvenNumber)
  const answerIsCorrect = answer === correctAnswer;

  resolve({ status: answerIsCorrect, answer, correctAnswer });
});

export default async (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  while(i <= 3) {
    const { status, answer, correctAnswer } = await game();

    const message = status
      ? 'Correct!'
      : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`

    console.log(message);
    if (!status) return;

    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
}