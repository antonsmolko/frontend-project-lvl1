import promptly from 'promptly';

export default async () => {
  console.log('Welcome to the Brain Games!');
  const answer = await promptly.prompt('May I have you name?');
  console.log('Hello,', answer);

  return answer;
};