// const words = ["ground", "control", "to", "major", "tom"];

// const map1 = words.map(function (h, i, arr) { 
//                   return (words);   //return new array
//                 });
// console.log(map1); 
const eqArrays = function(arr1, arr2) {
  let test = arr1.every(function(val, index) {
    return val === arr2[index];
  });
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && test === true) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(a1, a2) {    //to test middle function that return arrays.
  //use eqArrays for comparison
  console.log(a1);
  if (eqArrays(a1, a2)) {
    console.log(`Assertion Passed: `, a1, "===", a2);
  } else {
    console.log(`Assertion Failed: `, a1, "!==", a2);
  }
};

//LHL
const words = ["ground", "control", "to", "major", "tom"];
//two arg - an array, a callback
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
console.log(map);