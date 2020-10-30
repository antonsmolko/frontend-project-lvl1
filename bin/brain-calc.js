#!/usr/bin/env node
import calc from '../src/games/calc.js';
import engine from '../src/index.js';

engine({
  ruleMessage: 'What is the result of the expression?',
  game: calc,
});