// const assertEqual = require("../assertEqual");
const assert = require('chai').assert;
const head = require("../head");

describe("#head", () => {
  it("returns item at index 0 of array", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns item at index 0 of array]", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns item at index 0 of array", () => {
    assert.strictEqual(head(['5','6','7']), '5'); 
  });
});
