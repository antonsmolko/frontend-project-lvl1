#!/usr/bin/env node

import cli from '../src/cli.js';

(async () => {
  await console.log('Welcome to the Brain Games!');
  await cli();
})();
