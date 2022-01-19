
const countLetters = require("../countLetters");
const expect = require('chai').expect;

describe("#countLetters", () => {
  it("returns true if both objects key value pairs are equal", () => {
    let first = countLetters('LHL CNN');
    let second = JSON.stringify({ L: 2, H: 1, C: 1, N: 2 });
    expect(first).to.eql(second);
  });
  it("returns true if both objects key value pairs are equal", () => {
    let actual = countLetters('lighthouse in the house');
    let expected = JSON.stringify({
          l: 1,
          i: 2,
          g: 1,
          h: 4,
          t: 2,
          o: 2,
          u: 2,
          s: 2,
          e: 3,
          n: 1,});
    expect(actual).to.eql(expected);
  });
});
