const tail = function(arr) {
  return arr.slice(1);
};

const assertEqual = function(head, last) {
  if (head === last) {
    console.log(`Assertion Passed: ${head} === ${last}`);
  } else {
    console.log(`Assertion Failed: ${head} !== ${last}`);
  }
};

const arr1 = ["Hello", "Lighthouse", "Labs"];
assertEqual(arr1.length, 3); //lenght of arr is 3

const result = tail(arr1);
assertEqual(arr1.length, 3);  //length of array is still 3
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
