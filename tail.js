const tail = function(arr) {
  return arr.slice(1);
};

const assertEqual = function(tail, last) {
  if (tail === last) {
    console.log(`Assertion Passed: ${tail} === ${last}`);
  } else {
    console.log(`Assertion Failed: ${tail} !== ${last}`);
  }
  console.log(tail);
  console.log(last);
};
const arr1 = ["Hello", "Lighthouse", "Labs"];  //original array with length 3
const result = tail(arr1); //new array will be length 2

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
