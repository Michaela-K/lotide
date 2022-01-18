const assertEqual = require("../assertEqual");
const countOnly = require("../countOnly");
const expect = require('chai').expect;

describe("#countOnly", () => {
  it("returns 1 for result[Jason]", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expected = 1;
    expect(result["Jason"]).to.eql(expected);
  });
  it("returns undefined for result1[Karima]", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expected = undefined;
    expect(result["Karima"]).to.eql(expected);
  });
  it("returns 2 for result1[Fang]", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expected = 2;
    expect(result["Fang"]).to.eql(expected);
  });

});


// assertEqual(result1["Jason"], 1);  //true
// assertEqual(result1["Karima"], undefined);  //false
// assertEqual(result1["Fang"], 2);  //true
// assertEqual(result1["Agouhanna"], undefined);  //true