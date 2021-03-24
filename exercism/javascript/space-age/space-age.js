//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  if (planet == 'mercury') {
    return Math.round((seconds / 31557600 / .2408467 ) * 100) / 100;
  }
  if (planet == 'mercury') {
    return Math.round((seconds / 31557600 / .2408467 ) * 100) / 100;
  }
  if (planet == 'venus') {
    return Math.round((seconds / 31557600 / .61519726 ) * 100) / 100;
  }
  if (planet == 'earth') {
    return Math.round((seconds / 31557600) * 100) / 100;
  }
  if (planet == 'mars') {
    return Math.round((seconds / 31557600 / 1.8808158 ) * 100) / 100;
  }
  if (planet == 'jupiter') {
    return Math.round((seconds / 31557600 / 11.862615 ) * 100) / 100;
  }
  if (planet == 'saturn') {
    return Math.round((seconds / 31557600 / 29.447498 ) * 100) / 100;
  }
  if (planet == 'uranus') {
    return Math.round((seconds / 31557600 / 84.016846 ) * 100) / 100;
  }
  if (planet == 'neptune') {
    return Math.round((seconds / 31557600 / 164.79132 ) * 100) / 100;
  }
};
