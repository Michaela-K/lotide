const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map, 
  takeUntil: takeUntil,
  without: without,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
};

//open the node REPL
// > const _ = require('./index')
// undefined

// > _
// { head: [Function: head],
//   tail: [Function: tail],
//   middle: [Function: middle] }
// > .exit