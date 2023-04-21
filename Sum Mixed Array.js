/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x) {
  let arr = x.map(x => Number(x))
  return arr.reduce((a, b) => a + b)
}