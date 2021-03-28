//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
  let counts = {};
  let sentenceArray = sentence.toLowerCase().match(/\b(\w+\'?\w*)\b/g);
  sentenceArray.map((word) => {
    if (counts.hasOwnProperty(word)) {
      counts[word]++;
    }
    else {
      counts[word] = 1;
    }
  })
  return counts;
};
