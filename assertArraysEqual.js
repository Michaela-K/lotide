const eqArrays = require("./eqArrays");

const assertArraysEqual = function(a1, a2) {
  //use eqArrays for comparison
  if (eqArrays(a1, a2)) {
    console.log(`Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`Assertion Failed: ${a1} !== ${a2}`);
  }
};

module.exports = assertArraysEqual;

