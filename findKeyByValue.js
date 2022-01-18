// takes in an object and a value.
//It should scan the object and return the first key which contains the given value.
//If no key with that given value is found, then it should return undefined.
const findKeyByValue = function (obj, val) {
  //for...of to loop over the keys returned by Object.keys.
  // let output = "";
  const listOfKeys = Object.keys(obj); //no longer an obj
  for (const key of listOfKeys) {
    // console.log(listOfKeys[key]);
    if (obj[key] === val) {
      return key;
    }
  }
};


module.exports = findKeyByValue;



