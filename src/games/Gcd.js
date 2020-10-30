import { euclideGcd, getRandom } from '../helpers/index.js';

export default class {
  constructor(range) {
    this.range = range;
  }

  getNext() {
    const a = getRandom(this.range);
    const b = getRandom(this.range);
    return {
      clause: `${a} ${b}`,
      correctAnswer: this._getCorrectAnswer(a, b),
    }
  }

  _getCorrectAnswer(a, b) {
    const [min, max] = [a, b].sort();
    return euclideGcd(min, max).toString();
  }
}