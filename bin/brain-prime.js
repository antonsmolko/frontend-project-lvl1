#!/usr/bin/env node
import prime from '../src/games/prime.js';
import engine from '../src/index.js';

engine({
  ruleMessage: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  game: prime,
});