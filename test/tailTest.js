// const assertEqual = require("../assertEqual");
const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns all of array except index 0", () => {
    assert.deepEqual(tail(['1', '2', '3']), [ '2', '3' ]);
  });
  it("returns all of array except index 0", () => {
    assert.deepEqual(tail(['5']), []); 
  });
  it("returns all of array except index 0", () => {
    assert.deepEqual(tail(['5','6','7']), ['6','7']); 
  });
});