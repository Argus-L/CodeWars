/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  let arr = s.split(' ');
  let lowest = arr[0].length;
  arr.forEach(x => {
    if (x.length <= lowest) {
      lowest = x.length;
    }
  })
  return lowest;
}