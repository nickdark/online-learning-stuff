//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, list) => {
  let anagramList = [];
  for (let item of list) {
    if (item.toLowerCase().split('').sort().join() === word.toLowerCase().split('').sort().join() && item.toLowerCase() !== word.toLowerCase()) {
      anagramList.push(item);
    }
  }
  return anagramList;
};
