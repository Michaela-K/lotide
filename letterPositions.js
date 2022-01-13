// implement a new function letterPositions which will return all the indices 
// in the string where each character is found.
// skip spaces

// L: 1,2
// H: 1
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

const assertArraysEqual = function(a1,a2) {    //to compare 2 objects positions
  if (eqArrays(a1, a2)){
    console.log(`Assertion Passed: `, a1, "===", a2);
  } else {
    console.log(`Assertion Failed: `, a1, "!==", a2);
  }
};
// console.log(assertArraysEqual(JSON.stringify({ h: '0', e: '1', l: '2,3', o: '4' })));

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
    if(letter === " "){
      continue;
    }

    if(!results[letter]){
      results[letter] = [];
    }  

    results[letter].push(i);
  }

  return results;
};

console.log(letterPositions("hello world"));   //{ h: '0', e: '1', l: '2,3', o: '4' }


// const hello = letterPositions("hello");
// console.log(hello['e']);

// //TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("boy").y, [2]);

const result = letterPositions("hello");
assertArraysEqual(result.h , [0]);
assertArraysEqual(result.e , [1]);
assertArraysEqual(result.l , [2, 3]);
assertArraysEqual(result.o , [4]);
