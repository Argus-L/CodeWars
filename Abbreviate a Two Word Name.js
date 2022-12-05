/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {

  // code away
  const nameArr = name.split(' ');
  const firstName = nameArr[0].toUpperCase();
  const lastName = nameArr[1].toUpperCase();
  return firstName[0] + '.' + lastName[0];
}