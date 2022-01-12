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

//middle - take in an array and return the middle-most element(s) of the given array.
// ACTUAL FUNCTION
const middle = function(array) {
  let mid = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else if (array.length % 2 !== 0) {
    return [array[mid]];
  }
};

console.log((middle([1]))); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

const middy = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(middy), [4, 4]);