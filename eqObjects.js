// const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function (obj1, obj2) {
  //to compare obj data? - using obj key iteration
  //returns true (if both objects have identical keys with identical values)
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }
  for (const key of keyArr1) {
    // console.log(obj1[key], obj2[key]);
    // console.log()
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      console.log(eqArrays(obj1[key], obj2[key]));
      return eqArrays(obj1[key], obj2[key]);
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;



