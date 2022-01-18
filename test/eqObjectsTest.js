const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const eqObjects = require("../eqObjects");
const expect = require('chai').expect

describe("#eqObjects", () => {
  it("returns true if both objects have identical keys with identical values", () => {
    const test = eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
    expect(test).to.eql(true);
  });
  it("returns true if both objects have identical keys with identical values", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    expect(eqObjects(ab, ba)).to.eql(true);
  });
  it("returns false if both objects dont have identical keys with identical values", () => {
    const ab = { a: "1", b: "2"};
    const abc = { a: "1", b: "2", c: "3" };
    expect(eqObjects(ab, abc)).to.eql(false);
  });
});