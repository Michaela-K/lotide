// const assertEqual = require("../assertEqual");
// const assert = require('chai').assert;
const expect = require('chai').expect
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true if both arrays are equal", () => {
    const areEqual = eqArrays([1, 2, 3], [1, 2, 3]);
    expect(areEqual).to.eql(true);
  });
  it("returns false if both arrays are not equal", () => {
    const areEqual = eqArrays([3, 2, 1], [1, 2, 3]);
    expect(areEqual).to.eql(false);
  });
  it("returns true if both arrays are equal", () => {
    const areEqual = eqArrays(['1','2','3'], ["1", "2", "3"]);
    expect(areEqual).to.eql(true);
  });
  it("returns false if both arrays are not equal", () => {
    const areEqual = eqArrays(['1','2',3], ["1", "2", "3"]);
    expect(areEqual).to.eql(false);
  });
});

