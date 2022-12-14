/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let x of arrayOfSheep) {
    if (x === null || x === undefined) {
      console.log('This array contains bad values');
    } else if (x === true) {
      counter++;
    }
  }
  return counter;
}