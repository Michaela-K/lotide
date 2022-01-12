// let output;
// const eqArrays = function(arr1, arr2){
//   for (var i = 0; i < arr1.length; i++) {
//     // console.log(`arr1 is: ${arr1[i]}`);
//   }
//   for (var j = 0; j < arr2.length; j++){
//     // console.log(`arr2 is: ${arr2[j]}`);
//   }
//   if (arr1[i] !== arr2[j]){
//     output = false;
//   }else{
//     output = true;
//   }
//   return output;
// }


const eqArrays = function(arr1, arr2){
  return Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length &&
  arr1.every((val, i) => val === arr2[i]);
}

const assertEqual = function(arrs, last) {
  if (arrs === last) {
    console.log(`Assertion Passed: ${arrs} === ${last}`);
  } else {
    console.log(`Assertion Failed: ${arrs} !== ${last}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS