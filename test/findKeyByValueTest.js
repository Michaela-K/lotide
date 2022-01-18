const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");
const expect = require('chai').expect;

describe("#countOnly", () => {
  it("returns key for value provided", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";
    expect(result).to.eql(expected);
  });
  it("returns key for value provided", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    expect(result).to.eql(expected);
  });
});
