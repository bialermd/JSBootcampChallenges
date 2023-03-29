/* eslint-disable no-unused-vars */
//function multiply(arr) {
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//   // take every item in the array and add it to sum variable
//   sum = sum * arr[i];
// }
// return sum;
//Flattens array parameters
//new array with all sub-array elements concatenated into it recursively up to the specified depth
function multiply(arr) {
  //Flattens array parameters
  //new array with all sub-array elements concatenated, so numbers are 1 array.  Therefor able add, subtract/multiple or divide
  const flatArr = arr.flat();
  let sum = 1;
  for (let i = 0; i < flatArr.length; i++) {
    sum *= flatArr[i];
  }
  return sum;
}

function includesCopy(arr, searchValue) {
  //return arr.includes(searchValue);
  //loop over the array
  for (let i = 0; i < arr.length; i++) {
    // if a value is found return true
    //value not found, return false
    if (arr[i] === searchValue) {
      //value searches through [array]
      return true;
    }
  }
  return false;
}

function inventory(arr) {
  //variable is an undefined array
  const returnArr = [];

  //loop to go through test
  for (let i = 0; i < arr.length; i++) {
    //variable to pass value within the loop
    const nestArr = arr[i];
    //Array variables are index and passed
    const str = `The ${nestArr[1][0]} ${nestArr[0]} is ${nestArr[1][1]} dollars.`;
    //push() method adds one or more elements to the end of an array and returns the new length
    returnArr.push(str);
  }
  return returnArr;
}

function camelCase(str) {
  const punctuation = '1,.?';
  //undefined
  const newArr = [];
  // let Replace = str.split(' ').join('');
  // return Replace;
  //split adds spaces between array values
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    let firstLetter;

    if (i === 0) {
      firstLetter = word[0].toLowercase();
    } else {
      firstLetter = word[0].toUppercase();
    }
    const restOfWord = word.slice(1).toLowercase;
    const wholeWord = firstLetter + restOfWord;
    newArr.push(wholeWord);
  }

  const returnStr = newArr.join('');
  const lastInem = returnStr[returnStr.length - 1];
  if (punctuation.includes(lastInem)) {
    return returnStr.slice(0, returnStr.length - 1);
  }
  return returnStr;
}

//parameters need an arr & seperator
//seperator pararmeter
//pass with a delimeter (and)
//pass without a delimeter(,)
//delimeter default parameter is a comma (for dogs)
//values are joined together
//and between seinfield cast
//, between dogs
function joiner(arr, delimiter = ',') {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    //eliminate last item in an array
    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + delimiter;
    }
  }
  return str;
}

module.exports = {
  multiply,
  includesCopy,
  inventory,
  camelCase,
  joiner
};
