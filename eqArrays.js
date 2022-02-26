const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  let test = arr1.every(function(val, index) {
    return  val  ===  arr2[index];
  });
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && test === true) {
    return true;
  } else {
    return false;
  }
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

module.exports = eqArrays;
