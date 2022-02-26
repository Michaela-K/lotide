const head = require('./head');
const tail = require('./tail');
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
const flatten = require("./flatten")

module.exports = {
  head,
  tail,
  middle,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map, 
  takeUntil,
  without,
  eqArrays,
  eqObjects,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  flatten
};

//open the node REPL
// > const _ = require('./index')
// undefined

// > _
// { head: [Function: head],
//   tail: [Function: tail],
//   middle: [Function: middle] }
// > .exit