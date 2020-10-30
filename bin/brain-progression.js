#!/usr/bin/env node

import progression from '../src/games/progression.js';
import engine from '../src/index.js';

const game = progression({
  startRange: 40,
  stepRange: 50,
  sequenceRange: 7,
});

engine({
  ruleMessage: 'What number is missing in the progression?',
  game,
});
