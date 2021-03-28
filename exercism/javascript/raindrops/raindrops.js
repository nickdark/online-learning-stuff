//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let finalSound = '';
  finalSound += number % 3 === 0 ? 'Pling' : '';
  finalSound += number % 5 === 0 ? 'Plang' : '';
  finalSound += number % 7 === 0 ? 'Plong' : '';
  return finalSound.length > 0 ? finalSound : number;
};
