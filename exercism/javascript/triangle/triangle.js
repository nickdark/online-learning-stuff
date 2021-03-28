//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && sides.every((side) => { return side !== 0 });
  }

  get isIsosceles() {
    throw new Error('Remove this statement and implement this function');
  }

  get isScalene() {
    throw new Error('Remove this statement and implement this function');
  }
}
