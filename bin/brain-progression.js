#!/usr/bin/env node

import greeting from '../src/greeting.js';
import Progression from '../src/games/Progression.js';
import engine from '../src/engine.js';

const game = new Progression({
  startRange: 20,
  stepRange: 10,
  sequenceRange: 15
});

(async () => {
  const name = await greeting();
  console.log('What number is missing in the progression?');
  await engine({ name, game, stepCount: 3});
})();