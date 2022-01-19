# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michaelak/lotide`

**Require it:**

`const _ = require('@michaelak/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: retrieve the first element from the array, the array is not changed
* `tail()`: returns everything except for the first item of the array
* `middle()`: returns the middle items of an array
* `countLetters()`: take in a collection of items and return counts for a specific subset of those items
* `countOnly()`:  take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `findKey()`: takes in an object and a callback, scans the object and return the first key for which the callback returns a truthy value
* `findKeyByValue()`: takes in an object and a value, scans the object and return the first key which contains the given value
* `letterPositions()`: return all the indices (zero-based positions) in the string where each character is found
* `map()`: description
* `takeUntil()`: remove items from the array until a condition is satisfied
* `without()`: return new array, removing unwanted elements from original.
* `eqArrays()`: check if two arrays are the same
* `eqObjects()`: check if two objects are the same
* `eqObjects()`:check to see if actual output equals expected
* `assertEqual()`:compare two values and check if actual output equals expected
* `assertArraysEqual()`: compare actual array against expected outcome
* `assertObjectsEqual()`: compare actual object against expected outcome


