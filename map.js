const map = function (array, callback) {
  const results = [];
  array = array.flat();
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let callback = function(item){
  return item + "er";
}

module.exports = map;