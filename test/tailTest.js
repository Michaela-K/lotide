const assertEqual = require("../assertEqual");
const tail = require("../tail");


const arr1 = ["Hello", "Lighthouse", "Labs"];  //original array with length 3
const result = tail(arr1); //new array will be length 2
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);