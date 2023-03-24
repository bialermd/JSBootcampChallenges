/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
//'num' is pulling the value
function factorial(num) {
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function stringReverse(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
    //console.log(newString);
  }
  return newString;
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  //Create a variable with empty value.  This will equal return sum
  let sliceString = '';
  //creating the variable for i which can change in value
  for (let i = startIdx; i < endIdx; i++) {
    //method for slicdString with i indexed for the value
    sliceString += originalString[i];
  }
  return sliceString;
}

function addTheEvens(num) {
  //sum is variable to get evens
  let sum = 0;
  //for loop to run the loop between 0 and num
  for (let i = 0; i <= num; i++) {
    //i is to separate the even from odd
    if (i % 2 === 0) {
      //sum now is to locate even
      sum += i;
    }
  }
  //return even}
  return sum;
}

module.exports = {
  factorial,
  stringReverse,
  slicer,
  addTheEvens
};
