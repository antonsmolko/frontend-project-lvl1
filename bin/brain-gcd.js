#!/usr/bin/env node

import greeting from '../src/greeting.js';
import Gcd from '../src/games/Gcd.js';
import engine from '../src/engine.js';

const game = new Gcd(100);

(async () => {
  const name = await greeting();
  console.log('Find the greatest common divisor of given numbers.');
  await engine({ name, game, stepCount: 3});
})();