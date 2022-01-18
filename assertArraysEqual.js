const eqArrays = require("./eqArrays");

const assertArraysEqual = function(a1, a2) {
  //use eqArrays for comparison
  if (eqArrays(a1, a2)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertArraysEqual;

