// my solution:
function chunk(arr, num) {
  let arrEach = [];
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (finalArr.length === num) break;
    arrEach.push(arr[i]);
    if (
      arrEach.length === num ||
      (i === arr.length - 1 && finalArr.length !== num)
    ) {
      finalArr.push(arrEach);
      arrEach = [];
    }
  }
  return finalArr;
}
// const result = chunk([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(result);
// [[1,2], [3,4]]

function chunkArray(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    if (chunked.length >= size) break;
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
const result = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);
