#!/usr/bin/env node

import greeting from '../src/greeting.js';
import Prime from '../src/games/Prime.js';
import engine from '../src/engine.js';

const game = new Prime(1000);

(async () => {
  const name = await greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  await engine({ name, game, stepCount: 3});
})();