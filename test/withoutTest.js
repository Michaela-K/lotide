const eqArrays = require('../eqArrays');
const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");
const expect = require('chai').expect;
const assert = require('chai').assert;

describe("#without", () => {
  it("compares arrays of strings for matching items, and returns a new array of items that did not match(from the first array)", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]); 
  });
  it("compares array of numbers for matching items, and returns a new array of items that did not match from the first array ", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);; 
  });
  it("compares array of numbers for matching items, and returns a new array of items that did not match from the first array  ", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']); 
  });
});

