const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// JSON.stringify(put object here) 

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

// let actual = JSON.stringify(countLetters('LHL CNN'));
// let expected = JSON.stringify({ L: 2, H: 1, C: 1, N: 2 });
// assertEqual(actual, expected);

let actual = JSON.stringify(countLetters('lighthouse in the house'));
let expected = JSON.stringify({
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  });
assertEqual(actual, expected);





//return a count of each of the letters in that sentence.
  //loop through
  // let output = {};
  // for (const str in words) {
  //   console.log(words[str], str);
  //   if(words.charAt(str)){
  //     output.string[str] += 1; 
  //   }
  // }