// const multiply = (num1) => (num2) => num1 * num2;
// console.log(multiply(2)(3));
const curry = (fn) => {
  const arity = fn.length;
  console.log(arity);
};
const curriedSum = curry((a, b, c) => a + b + c);
