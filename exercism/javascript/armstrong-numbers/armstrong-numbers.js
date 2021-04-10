//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let numString = num.toString();
  let total = 0;
  for (let i = 0; i < numString.length; i++) {
    total += Math.pow(parseInt(numString[i]), numString.length);
  }
  return num === total;
};
