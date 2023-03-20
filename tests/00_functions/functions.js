/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) {
  if (num1 > num2 && num1 > num2) return num1;
  else if (num2 > num1 && num2 > num3) return num2;
  else if (num3 > num1 && num3 > num2) return num3;
}

function addUnknown(bnum1, bnum2, bnum3, bnum4, bnum5) {
  if ((total = bnum1 + bnum2 + bnum3 + bnum4 + bnum5)) return total;
  else if ((total = bnum1 + bnum2 + bnum3)) return total;
  else if ((total = bnum1 + bnum2)) return total;
}

function evenOrOdd(number) {
  //number % 2 === 0 is an expression
  //? validates the expression
  //If expression is true will return even
  //if expression is false will return odd
  return number % 2 === 0 ? 'even' : 'odd';
}

function operator(op1, op2, op3) {
  // return 'plus' if the first two numbers equal the third
  if (op1 + op2 === op3) return 'plus';

  // return 'minus' if the first number minus the second equals the third
  if (op1 - op2 === op3) return 'minus';

  // return 'multiply' if the first two numbers multiplied together equals the third
  if (op1 * op2 === op3) return 'multiply';

  // return 'divide' if the first number divided by the second equals the third
  if (op1 / op2 === op3) return 'divide';

  return null;
}

module.exports = {
  max,
  addUnknown,
  evenOrOdd,
  operator
};
