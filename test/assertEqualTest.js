const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const expect = require('chai').expect

describe("#assertEqual", () => {
  it("returns true if both strings are equal", () => {
    const areEqual = assertEqual("150", "150");
    expect(areEqual).to.eql(true);
  });
  it("returns false if both strings are not equal", () => {
    const areEqual = assertEqual("Lighthouse Labs","Bootcamp");
    expect(areEqual).to.eql(false);
  });
});
