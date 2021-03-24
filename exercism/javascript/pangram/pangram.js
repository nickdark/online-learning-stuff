//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  let regex = /([a-z])(?!.*\1)/gi;
  return (string.match(regex) || []).length === 26;
};
