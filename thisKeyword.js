/* task 1 */
// function example() {
//   console.log(this);
// }
// example();
// // this: global obj

/* task 2 */
// const example = {
//   name: "Nong",
//   getName: function () {
//     console.log(this);
//   },
// };
// example.getName();
// // this: example obj

/* task 3 */
class Person {
  hobby = "coding";
  getName() {
    const this_ = this;
    function something() {
      console.log(this_);
    }
    something();
  }
}
const user = new Person();
user.getName();
