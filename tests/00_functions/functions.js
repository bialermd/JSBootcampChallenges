/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) {
  // nice job solving. Looks good.
  if (num1 > num2 && num1 > num2) return num1;
  else if (num2 > num1 && num2 > num3) return num2;
  else if (num3 > num1 && num3 > num2) return num3;
}

function addUnknown(bnum1, bnum2, bnum3= 0, bnum4= 0, bnum5= 0) {
  // Good job solving. I do think default parameters are a little cleaner and can do this
  return bnum1 + bnum2 + bnum3 + bnum4 + bnum5

}

function evenOrOdd(number) {
  //number % 2 === 0 is an expression
  //? validates the expression
  //If expression is true will return even
  //if expression is false will return odd
  // This is a ternary expression which as a bit more advanced than an if statement. Are you clear what is going on here.
  // a ternary is just another way to write an if statement.
  return number % 2 === 0 ? 'even' : 'odd';
}

function operator(op1, op2, op3) {
  // Great!!
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
