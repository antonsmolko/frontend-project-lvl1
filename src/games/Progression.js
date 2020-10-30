import { getRandom, getProgression } from '../helpers/index.js';

export default class {
  constructor({ startRange = 0, stepRange = 3, sequenceRange = 10 }) {
    this.startRange = startRange;
    this.stepRange = stepRange;
    this.sequenceRange = sequenceRange;
  }

  getNext() {
    const { progression, hiddenIndex } = this._getNextOptions();
    const correctAnswer = progression
      .splice(hiddenIndex, 1, '..')
      .toString();
    const clause = progression.join(' ');

    return {
      clause,
      correctAnswer,
    }
  }

  _getNextOptions() {
    const start = getRandom(this.startRange);
    const step = getRandom(this.stepRange);
    const randomSequenceLength = getRandom(this.sequenceRange);
    const length = randomSequenceLength >= 5 ? randomSequenceLength : 5;
    return {
      progression: getProgression(start, step, length),
      hiddenIndex: getRandom(length - 1),
    };
  }
}