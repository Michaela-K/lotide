const assertEqual = function (actual, expected) {
  //for checking primitive return types
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKey = function (obj, cb) {
  let returnKey = undefined;
  for (const key in obj ){
    // console.log(key);
    // console.log(obj[key]);
    if (cb(obj[key])){
      returnKey = key;
      break;
    }
  }
  return returnKey;
};
// is there a eway to do for each to achieve this?
console.log(assertEqual(findKey(
  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
  },
  (x) => x.stars === 2
), "noma")); // => "noma"


console.log(assertEqual(findKey(
  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
  },
  (x) => x.stars === 3
), "Akaleri")); // => "Akaleri"