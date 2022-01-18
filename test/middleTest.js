const middle = require("../middle");
const assert = require('chai').assert;
// const assertArraysEqual = require("../assertArraysEqual");


describe("#middle", () => {
  it("returns middle of array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("rreturns middle of array", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns middle of array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns middle of array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns middle of array", () => {
    assert.deepEqual(middle([1, 2, 3, 4 ,5]), [3]);
  });
  it("returns middle of array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});