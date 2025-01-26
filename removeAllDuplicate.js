/* using SET */
const duplicateList = [1, 1, 2, 2, 2, 3];
// const removeDuplicate = (arr) => [...new Set(arr)];

/* using loops */
// const removeDuplicate = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     if (!result.includes(item)) result.push(item);
//   });
//   return result;
// };

/* using reduce() */
const removeDuplicate = (arr) => {
  return arr.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);
};
console.log(removeDuplicate(duplicateList));