/**
 * Title : Random Number Generator
 * description : generator random number between two numbers
 * author : Sobahan Al Tahsin
 * date : 1/2/2022
 */

// module Scaffolding
const randomApp = {};

randomApp.randomNumber = (min, max) => {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === 'number' ? minimum : 0;
  maximum = typeof maximum === 'number' ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

module.exports = randomApp;
