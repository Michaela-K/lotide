// const assertEqual = require("../assertEqual");
const findKey = require('../findKey');
const expect = require('chai').expect;

describe("#findKey", () => {
  it("returns corresponding key to object value given", () => {
    const act = findKey(
      {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
      },
      (x) => x.stars === 2);
    const expected = "noma";
    expect(act).to.eql(expected);
  });
  it("returns corresponding key to object value given", () => {
    const act = findKey(
      {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
      },
      (x) => x.stars === 3);
    const expected = "Akaleri";
    expect(act).to.eql(expected);
  });
});