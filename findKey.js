const findKey = function (obj, cb) {
  let returnKey = undefined;
  for (const key in obj ){
    if (cb(obj[key])){
      returnKey = key;
      break;
    }
  }
  return returnKey;
};

module.exports = findKey;

