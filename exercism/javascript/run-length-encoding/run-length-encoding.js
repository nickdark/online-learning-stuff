export const encode = (string) => {
  if (string === "") {
    return string;
  }
  let encodedString = "";
  let counter = 0;
  let curChar = string[0];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === curChar) {
      counter++;
    } else if (string[i] !== curChar) {
      if (counter >= 2) {
        encodedString += counter + curChar;
      } else {
        encodedString += curChar;
      }
      curChar = string[i];
      counter = 1;
    }
  }
  if (counter >= 2) {
    encodedString += counter + curChar;
  } else {
    encodedString += curChar;
  }
  return encodedString;
};

export const decode = (str) => {
const chars = str.split('')
  let decoded = ""
  let number = 0

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]

    if (isNaN(char) || char === ' ') {
      if (number === 0) {
        decoded += char
      } else {
        let finalNum = Number(number)
        while (finalNum >= 1) {
          decoded += char
          finalNum--
        }
        number = 0
      }
    } else {
      number += char
    }
  }

  return decoded};
