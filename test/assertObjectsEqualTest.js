const assertObjectsEqual = require("../assertObjectsEqual");
// const eqObjects = require("./eqObjects");
const expect = require('chai').expect
// const assert = require('chai').assert;

describe("#assertObjectsEqual", () => {
  it("returns false if both objects dont have identical keys with identical values", () => {
    const test = assertObjectsEqual({ a: "9", b: "2" },{ b: "2", a: "1" });
    expect(test).to.eql(false);
  });
  it("returns true if both objects dont have identical keys with identical values", () => {
    const test = assertObjectsEqual({ a: "8", b: "1" },{ b: "1", a: "8" });
    expect(test).to.eql(true);
  });
});
