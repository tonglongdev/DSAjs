// const multiply = (num1) => (num2) => num1 * num2;
// console.log(multiply(2)(3));

// const curry =
//   (fn) =>
//   (...arg) =>
//     fn(...arg);
// const curriedSum = curry((a, b, c) => a + b + c);
// console.log(curriedSum(1, 2, 3)); // 6

const curry = (fn) => {
  const arity = fn.length;
  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        const newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};
const curriedSum = curry((a, b, c) => a + b + c);
// const partiallyCurriedSum = curriedSum(1);
// console.log(partiallyCurriedSum(2));
console.log(curriedSum(1)(2,2))
