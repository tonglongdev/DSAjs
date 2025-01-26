/* for loops */
// const range = (start, end) => {
//   let result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }

/* using Array */
const range = (start, end) => [...Array(end - start + 1).keys()].map((el) => el + start);
console.log(range(3, 20));
