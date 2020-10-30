import promptly from 'promptly';

export default async () => {
  await promptly.prompt('May I have you name?');
  // await console.log('Hello,', answer);
};
