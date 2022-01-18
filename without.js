//return new array, removing unwanted elements from original.
const without = function(source, itemsToRm) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRm.length; j++) {
      if (source[i] !== itemsToRm[j]) {
        newArr.push(source[i]);
      }
    }
  }
  //arr 1 is the focus - look at contents of arr1 and whatever does not match in arr 2...print it(from arr1)
  return newArr;
};

module.exports = without;
