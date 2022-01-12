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

const assertArraysEqual = function(a1, a2) {
  //use eqArrays for comparison
  if (a1 === a2) {
    console.log(`Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`Assertion Failed: ${a1} !== ${a2}`);
  }
};

const without = function(source, itemsToRm) {
  //return a subset of a given array, removing unwanted elements.

}
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
