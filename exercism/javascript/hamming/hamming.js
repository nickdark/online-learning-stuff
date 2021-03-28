//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {
  if (dna1.length === 0 && dna2.length === 0) {
    return 0;
  }
  else if (dna1.length === 0) {
    throw new Error('left strand must not be empty');
  }
  else if (dna2.length === 0) {
    throw new Error('right strand must not be empty');
  }
  else if (dna1.length !== dna2.length) {
    throw new Error('left and right strands must be of equal length');
  }

  return dna1.split('').filter((el, index) => el !== dna2[index]).length;
}
