const eqArrays = require('../eqArrays');
const assertArraysEqual = require("../assertArraysEqual");
const expect = require('chai').expect;
const assert = require('chai').assert;
const map = require("../map")


describe("#map", () => {
  it("loops through a single array of words and returns array with an 'er' added onto the end", () => {
    const words1 = (map(["ground", "control", "stroll", "roll"], item => item + "er"));
    const words2 = (['grounder', 'controler', 'stroller', 'roller']);;
    assert.deepEqual(words1, words2); 
  });
  it("loops through a double nested array of words and returns array of words with an 'er' added onto the end", () => {
    const words1 = (map(["ground", "control", "stroll", ["roll"]], item => item + "er"));
    const words2 = (['grounder', 'controler', 'stroller', 'roller']);;
    assert.deepEqual(words1, words2); 
  });
  it("loops through a tripplenestd  array of words and returns array of words with an 'er' added onto the end", () => {
    const words3 = (map(["ground", "control", "stroll", [["roll"]]], item => item + "er"));
    const words4 = (['grounder', 'controler', 'stroller', 'roller']);;
    assert.deepEqual(words3, words4); 
  });
});


