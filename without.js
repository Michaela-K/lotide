//return new array, removing unwanted elements from original.

const without = function(source, itemsToRm) {
  const result = source.filter(item => !itemsToRm.includes(item));
  console.log("result: ",result);
  return result;
}


module.exports = without;
