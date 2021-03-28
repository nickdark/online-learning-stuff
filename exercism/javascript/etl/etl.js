//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldSystem) => {
  const newSystem = {};
  for (const [key, value] of Object.entries(oldSystem)) {
    value.map((x) => {
      newSystem[x.toString().toLowerCase()] = Number.parseInt(key);
    })
    // newSystem[value.toString()] = key;
  }
  return newSystem;
};
