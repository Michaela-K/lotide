const assertEqual = function(eq, bool) {
  if (eq === bool) {
    console.log(`Assertion Passed: ${eq} === ${bool}`);
  } else {
    console.log(`Assertion Failed: ${eq} !== ${bool}`);
  }
};

let output;
const eqArrays = function(arr1, arr2){
  for (var i = 0; i < arr1.length; i++) {
    // console.log(`arr1 is: ${arr1[i]}`);
  }
  for (var j = 0; j < arr2.length; j++){
    // console.log(`arr2 is: ${arr2[j]}`);
  }
  if (arr1[i] !== arr2[j]){
    output = false;
  }else{
    output = true;
  }
  return output;
}

const assertArraysEqual = function(a1, a2){
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);