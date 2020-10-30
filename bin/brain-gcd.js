#!/usr/bin/env node

import gcd from '../src/games/gcd.js';
import engine from '../src/index.js';

engine({
  ruleMessage: 'Find the greatest common divisor of given numbers.',
  game: gcd,
});
