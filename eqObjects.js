const assertEqual = function (actual, expected) {
  //for checking primitive return types
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  let test = arr1.every(function(val, index) {
    return  val  ===  arr2[index];
  });
  if (arr1.length === arr2.length && test === true) {
    return true;
  } else {
    return false;
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
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

