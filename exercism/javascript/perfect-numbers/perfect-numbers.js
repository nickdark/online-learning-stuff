//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (n) => {
  if (!(n > 0)) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  let total = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      total += i;
    }
  }
  if (total > n) {
    return "abundant";
  } else if (total < n) {
    return "deficient";
  } else if (total === n) {
    return "perfect";
  }
};
