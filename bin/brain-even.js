#!/usr/bin/env node

import greeting from '../src/greeting.js';
import Even from '../src/games/Even.js';
import engine from '../src/engine.js';

const game = new Even(100);

(async () => {
  const name = await greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  await engine({ name, game, stepCount: 3});
})();

