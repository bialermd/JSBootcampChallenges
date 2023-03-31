/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//greet is the object
const greet = {
  //property
  //name is the string
  //key & value
  firstName: 'Chloe',
  //method
  sayHello() {
    return `Hello, I'm ${this.firstName}`;
  }
};

const calc = {
  //setting up object with values and keys
  total: 0,
  //Method is the function attached to an object
  add(num) {
    return (this.total += num);
  },
  subtract(num) {
    return (this.total -= num);
  },
  clear(num) {
    //nothing is passed
    this.total = 0;
  }
};

module.exports = { greet, calc };
