//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    }

    else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      let last = stack.pop();
      if (str[i] !== map[last]) { return false };
    }
  }
  if (stack.length !== 0) { return false };
  return true;
};
