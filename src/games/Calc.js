import { getRandom } from '../helpers/index.js';

export default class {
  constructor(range) {
    this.range = range;
    this.calcMap = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
    };
    this.operations = Object.keys(this.calcMap);
  }

  getNext() {
    const op = this.operations[getRandom(this.operations.length - 1)];
    const a = getRandom(this.range);
    const b = getRandom(this.range);

    return {
      clause: `${a} ${op} ${b}`,
      correctAnswer: this._getCorrectAnswer(a, b, op),
    }
  }

  _getCorrectAnswer(a, b, op) {
    return String(this.calcMap[op](a, b));
  }
}