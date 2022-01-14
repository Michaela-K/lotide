//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
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

const takeUntil = function (array, callback) {
  let newArr = [];
  //looping through using index and value because of .entries()
  for (const [index, value] of array.entries()){ 
    if(!callback(value)){                         //
      newArr.push(array.slice(index, index + 1).pop());  //pop takes it out of the array and it will be a value
    }
    if(callback(value)){
      break;   //stops loop. Does not work with for loops
    }
  }
  return newArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(assertArraysEqual(takeUntil(data1, (x) => x < 0), [1, 2, 5, 7, 2]));

console.log('---');   //---

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])); 
