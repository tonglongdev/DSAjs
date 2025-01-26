const arrNum = [3, 4, 2, 2, 3, 5, 2];
const findAndCount = (arr) => {
  let storage = {};
  const minimumVal = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (storage[`${arr[i]}`]) {
      storage[`${arr[i]}`]++;
    } else {
      storage[`${arr[i]}`] = 1;
    }
  }
  return {
    [minimumVal]: storage[minimumVal],
  };
};
console.log(findAndCount(arrNum));
