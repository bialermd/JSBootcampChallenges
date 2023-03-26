/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
//'num' is pulling the value
function factorial(num) {
  // nice job solving. There is a coding principle called pure functions. What that means is that a function should not have side effects such as changing the value of a variable passed. So ideally you should make a new variable inside the function and not change the value of the parameters. 
  // https://www.scaler.com/topics/pure-function-in-javascript/
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
  // if starting or ending indexes are not passed you need to assign and you can do that like this.

  if (!startIdx) {
    return originalString
  }

  if (!endIdx) {
    endIdx = originalString.length
  }

  //Create a variable with empty value.  This will equal return sum
  let sliceString = '';
  //creating the variable for i which can change in value
  for (let i = startIdx; i < endIdx; i++) {
    //method for slicdString with i indexed for the value
    sliceString += originalString[i];
  }
  return sliceString;
}

// great!
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
