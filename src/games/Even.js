import { getRandom } from '../helpers/index.js';

export default class {
  constructor(range) {
    this.range = range;
  }

  getNext() {
    const number = getRandom(this.range);
    return {
      clause: number,
      correctAnswer: this._getCorrectAnswer(number),
    }
  }

  _getCorrectAnswer(number) {
    return !Boolean(number % 2) ? 'yes' : 'no'
  }
}