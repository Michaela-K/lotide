const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (obj1, obj2) {
  const areObjsEq = eqObjects(obj1, obj2);
  const inspect = require("util").inspect;
  if (areObjsEq) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertObjectsEqual;


