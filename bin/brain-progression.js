#!/usr/bin/env node

import progression from '../src/games/progression.js';
import engine from '../src/index.js';

engine({
  ruleMessage: 'What number is missing in the progression?',
  game: progression,
});
