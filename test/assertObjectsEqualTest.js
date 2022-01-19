const assertObjectsEqual = require("../assertObjectsEqual");

const expect = require('chai').expect


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
