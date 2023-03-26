/* eslint-disable no-unused-vars */

// function doesInclude(str, letter) {
//   const a = str.includes(1);
//   const b = letter.includes(1);
//   if (a === b) return true;
// }

//function definition.
//Function call in strings.test.js "doesInclude"
function doesInclude(str, letter) {
  //str is 1st
  //letter is 2nd
  //includes is a method.  2nd is contained in first
  //true if letter is included in string, false if letter is not included
  return str.includes(letter);
}

function cap(str, letter) {
  //parameter str searches letter which is now lower case
  const index = str.indexOf(letter.toLowerCase());
  //values is -1, it is not found because it does not exist
  if (index === -1) {
    return 'sorry not found';
  }
  //if value/index exist and set to positive and uppercase.  Inside [] value is referenced
  const nextLetter = str[index + 1];
  //index exist and since value is uppercase, then found
  return nextLetter.toUpperCase();
}

// function firstCharacter(str1, str2) {

// }
function firstCharacter(str1, str2) {
  //Setting the variable index to 1st character, using index [0]
  const strOne = str1[0];
  const strTwo = str2[0];
  //1st is both values are lowercase, 2nd is values are the same.
  //If either value matches, then true.  If does not match, then false
  return (
    //LowerCase method for bonus
    // nice job solving this! This will work without the or statement. 
    strOne.toLowerCase() === strTwo.toLowerCase() || strOne === strTwo
  );
}

module.exports = {
  cap,
  firstCharacter,
  doesInclude
};
