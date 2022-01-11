const head = function(arr){
  return arr.shift();
};

const assertEqual = function(head, last) {
    console.log(last);
  if (head === last) {
    console.log(`Assertion Passed: ${head} === ${last}`);
  } else {
    console.log(`Assertion Failed: ${head} !== ${last}`);
  }
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8]));