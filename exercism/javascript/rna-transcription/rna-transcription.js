//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (sequence) => {
  if (sequence) {
    sequence = sequence.split("");
    return sequence.map((letter) => {
      if (letter == 'C') {
        return 'G';
      }
      else if (letter == 'G') {
        return 'C';
      }
      else if (letter == 'T') {
        return 'A';
      }
      else if (letter == 'A') {
        return 'U';
      }
    }).join("");
  }
  return '';
};
