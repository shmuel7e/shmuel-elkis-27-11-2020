/**
 * @param {number} fahrenheit
 * @return {number}
 */

export const getfToC = (fahrenheit) => {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  return Math.round(fToCel);
};

export default getfToC;
