//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides.every((side) => side !== 0) && this.sides.reduce((acc, curr) => acc + curr) - Math.max(...this.sides) >= Math.max(...this.sides);
  }

  get isIsosceles() {
    return (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || this.sides[0] === this.sides[2]) && this.sides.every((side) => side !== 0) && this.sides.reduce((acc, curr) => acc + curr) - Math.max(...this.sides) >= Math.max(...this.sides);
  }

  get isScalene() {
    return this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2] && this.sides[0] !== this.sides[2] && this.sides.every((side) => side !== 0) && this.sides.reduce((acc, curr) => acc + curr) - Math.max(...this.sides) >= Math.max(...this.sides);
  }
}

// const triangle = new Triangle(7, 3, 2);
// console.log(triangle.sides.reduce((acc, cur) => acc + cur));
// console.log(triangle.sides.reduce((acc, cur) => acc + cur) - Math.max(...triangle.sides));
// console.log(triangle.sides.reduce((acc, cur) => acc + cur) - Math.max(...triangle.sides) >= Math.max(...triangle.sides));
