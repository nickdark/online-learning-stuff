//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (xCoordinate, yCoordinate) => {
  const rSquared = 100;
  let value = 0;
  const x = Math.abs(xCoordinate);
  const y = Math.abs(yCoordinate);
  if (x * x + y * y <= 100) {
    value = 1;
    if (x * x + y * y <= 25) {
      value = 5;
      if (x * x + y * y <= 1) {
        value = 10;
      }
    }
  }
  return value;
};
