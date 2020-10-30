#!/usr/bin/env node

import greeting from '../src/greeting.js';
import Calc from '../src/games/Calc.js';
import engine from '../src/engine.js';

const game = new Calc(10);

(async () => {
  const name = await greeting();
  console.log('What is the result of the expression?');
  engine({ name, game, stepCount: 3});
})();