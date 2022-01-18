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

module.exports = map;


