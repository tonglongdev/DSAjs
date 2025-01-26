const shuffle = (items) =>
  items
    .map((item) => ({ order: Math.random(), value: item }))
    .sort((a, b) => a.order - b.order)
    .map((el) => el.value);

console.log(shuffle([1, 2, 3, 4]));
