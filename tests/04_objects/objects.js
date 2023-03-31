/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
  //read objects
  //age is deleted
  delete obj[prop];

  console.log(obj);
  // ✔ is a function
  // { firstName: 'joe' }
  //     ✔ returns an object
  // { firstName: 'Tom', lastName: 'Smith', occupation: 'developer' }
  // { firstName: 'Tom' }
  //     ✔ returns an object with the listed property deleted
  return obj;
}

function numObjectProps(obj) {
  //keys stored as an object
  //keys is changed to an array
  //get length of array
  const keys = Object.keys(obj);
  return keys.length;
}

function shoppingCart(cart) {
  //array of objects

  let sum = 0;
  //length is an array
  //for loop is adding the number
  for (let i = 0; i < cart.length; i++) {
    //gathers final length
    sum += cart[i].amount;
  }
  console.log(sum);
  return sum;
}

function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  //in loop checking keys in Objects
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  //if not false, then true
  return true;
}

module.exports = {
  compareObjects,
  deleteProp,
  numObjectProps,
  shoppingCart
};
