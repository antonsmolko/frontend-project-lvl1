import promptly from 'promptly';

export default async () => {
  const answer = await promptly.prompt('May I have you name?');

  console.log('Hello,', answer);
}