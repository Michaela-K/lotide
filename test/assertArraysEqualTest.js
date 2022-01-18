const assertArraysEqual = require("../assertArraysEqual");
const expect = require('chai').expect
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("checks if two array are equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("checks if two array are equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("checks if two array are equal", () => {
    assert.strictEqual(assertArraysEqual([3, 2, 1], [1, 2, 3]), false);
  });
});
