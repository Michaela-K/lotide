const eqArrays = function (arr1, arr2) {
  let test = arr1.every(function (val, index) {
    // console.log(arr1);           //[ 'grounderer', 'controlerer', 'strollerer', 'rollerer' ]
    // console.log(val);            //grounderer
    // console.log(arr1[index]);    //grounderer
    // console.log(arr2);           //undefined*****
    // console.log(arr2[index]);    //ERROR********
    return val === arr2[index];
  });
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    test === true
  ) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (a1, a2) {
  //to test middle function that return arrays.
  //use eqArrays for comparison
  if (eqArrays(a1, a2)) {
    console.log(`Assertion Passed: `, a1, "===", a2);
  } else {
    console.log(`Assertion Failed: `, a1, "!==", a2);
  }
};

const map = function (array, callback) {
  const results = [];
  array = array.flat();
  for (let item of array) {
    results.push(cally(item));
  }
  return results;
};
//callback
const cally = function (item) {
  return `${item}er`;
};

// console.log(map(words));

// TESTS
// single array
// words = (["ground", "control", "stroll", "roll"]);
// words2 = (['grounder', 'controler', 'stroller', 'roller']);
// assertArraysEqual(map(words), words2);
// nested array
// words = (["ground", "control", "stroll", ["roll"]]);
// words2 = (['grounder', 'controler', 'stroller', 'roller']);
// assertArraysEqual(map(words), words2);
// //different nested array
words = ["ground", "control", "stroll", [["roll"]]];
words2 = ["grounder", "controler", "stroller", "roller"];
assertArraysEqual(map(words), words2);
