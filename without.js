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
  if (eqArrays(a1, a2)) {
    console.log(`Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`Assertion Failed: ${a1} !== ${a2}`);
  }
};

//return new array, removing unwanted elements from original.
const without = function(source, itemsToRm) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRm.length; j++) {
      if (source[i] !== itemsToRm[j]) {
        newArr.push(source[i]);
      }
    }
  }
  //arr 1 is the focus - look at contents of arr1 and whatever does not match in arr 2...print it(from arr1)
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function

console.log(without([1, 2, 3], [1]));// => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
