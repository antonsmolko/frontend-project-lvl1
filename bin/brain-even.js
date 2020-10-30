#!/usr/bin/env node

import even from '../src/games/even.js';
import engine from '../src/index.js';

engine({
  ruleMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
  game: even,
});
