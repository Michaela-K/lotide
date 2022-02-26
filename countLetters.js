const countLetters = function(words) {
  let output = {};
  for(let i = 0; i < words.length; i++){
    let letter = words[i];
    if(letter !== ' '){
    if(output[letter]){
      output[letter] += 1;
    }else{
      output[letter] = 1;
    }
  }
  }
  return output;
};

module.exports = countLetters;
