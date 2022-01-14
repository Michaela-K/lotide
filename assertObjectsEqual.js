const assertObjectsEqual = function(obj1, obj2) {
  // Implement me!
  const areObjsEq = eqObjects(obj1, obj2);
console.log(areObjsEq);
  const inspect = require('util').inspect; //returns the string representation of the objects. like json. stringify
  if (areObjsEq) {
    // console.log(`Example label: ${inspect(obj1)}`);
    console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);  
  } else {
    console.log(`Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

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
    if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
      console.log(eqArrays(obj1[key], obj2[key]));
     return eqArrays(obj1[key], obj2[key]);
    }
    if(obj1[key] !== obj2[key]){
      return false;
    }
  }
  return true;
};

const ab = { a: "9", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab ,ba); // => true