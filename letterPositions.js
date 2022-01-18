// implement a new function letterPositions which will return all the indices 
// in the string where each character is found.
// skip spaces

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
    if(letter === " "){
      continue;
    }

    if(!results[letter]){
      results[letter] = [];
    }  

    results[letter].push(i);
  }

  return results;
};

module.exports = letterPositions;
