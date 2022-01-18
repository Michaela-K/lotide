const eqArrays = require('../eqArrays');
const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");
const expect = require('chai').expect;
const assert = require('chai').assert;

describe("#map", () => {
  it("loops thorugh an array of numbers and stops when a condition has become truthy ", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, (x) => x < 0), [1, 2, 5, 7, 2]); 
  });
  it("loops thorugh an array of strings and stops when a condition has become truthy ", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]); 
  });
});