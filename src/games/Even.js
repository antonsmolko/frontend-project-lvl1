export default class {
  constructor(range) {
    this.range = range;
  }

  getNext() {
    const number = this._getRandom(this.range)
    return {
      clause: number,
      correctAnswer: this._getCorrectAnswer(number),
    }
  }

  _getCorrectAnswer(number) {
    return !Boolean(number % 2) ? 'yes' : 'no'
  }

  _getRandom(range) {
    return Math.round(Math.random() * range);
  }
}