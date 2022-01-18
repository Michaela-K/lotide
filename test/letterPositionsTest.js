// const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");
const expect = require('chai').expect;
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns the index of letter requested ('hello').e", () => {
    const letter = letterPositions("hello").e
    const result = [1];
    assert.deepEqual(letter, result); 
  });
  it("returns the index of letter requested ('hello').y", () => {
    const letter = letterPositions("hello").l
    const result = [2,3];
    // expect(letter).to.eql(result);
    assert.deepEqual(letter, result); 
  });
  it("returns the index of letter requested ('boy').y", () => {
    const letter = letterPositions("boy").y
    const result = [2];
    assert.deepEqual(letter, result); 
  });
});
