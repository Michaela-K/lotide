
//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
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
module.exports = takeUntil;


