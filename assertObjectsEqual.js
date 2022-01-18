const assertArraysEqual = require("./assertArraysEqual");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (obj1, obj2) {
  // Implement me!
  const areObjsEq = eqObjects(obj1, obj2);
  console.log(areObjsEq);
  const inspect = require("util").inspect; //returns the string representation of the objects. like json. stringify
  if (areObjsEq) {
    // console.log(`Example label: ${inspect(obj1)}`);
    return true;
  } else {
    return false;
  }
};

module.exports = assertObjectsEqual;


