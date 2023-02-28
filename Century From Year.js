/*
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

/* First solution
function century(year) {
  let yearArr = Array.from(String(year), Number);
  if (yearArr[yearArr.length - 2] === 0 && yearArr[yearArr.length - 1] === 0) {
    return year / 100;
  } else {
    return (Math.floor(year / 100) + 1);
  }
}
*/

function century(year) {
  return Math.ceil(year / 100);
}