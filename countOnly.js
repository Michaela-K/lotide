
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //return an obj - no. of keys with truthy value
  const results = {};
  for (const item of allItems) {
    if (results[item]) {   //why does results[item] equal 1
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;
