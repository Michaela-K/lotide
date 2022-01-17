// const assertEqual = require("../assertEqual");
const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [ '2', '3' ] for ['1', '2', '3']", () => {
    assert.deepEqual(tail(['1', '2', '3']), [ '2', '3' ]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
  it("returns ['6','7'] for ['5','6','7']", () => {
    assert.deepEqual(tail(['5','6','7']), ['6','7']); 
  });
});