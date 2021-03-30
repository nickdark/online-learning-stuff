//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this._scores = scores
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this._scores);
  }

  get personalTopThree() {
    if (this._scores.length <= 3) {
      return this._scores.sort((a, b) => b - a);
    }
    return this._scores.sort((a, b) => b - a).slice(0, 3);
  }
}
