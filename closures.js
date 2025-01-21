function privateCounter() {
  let count = 0;
  return {
    increment: (value = 1) => (count += value),
    getValue: () => count,
  };
}
const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
