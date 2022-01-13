const assertEqual = function (actual, expected) {
  //for checking primitive return types
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (obj1, obj2) {
  //to compare obj data? - using obj key iteration
  let output;
  //returns true (if both objects have identical keys with identical values)
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }
  for (const key of keyArr1) {
    if(obj1[key] !== obj2[key]){
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// TEST CODE
// assertEqual("Lighthouse Labs","Bootcamp");
// assertEqual(1,1);
