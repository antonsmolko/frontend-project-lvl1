#!/usr/bin/env node

import greeting from '../src/greeting.js';
import parityCheck from '../src/parity-check.js';

(async () => {
  const name = await greeting();
  await parityCheck(name);
})();

