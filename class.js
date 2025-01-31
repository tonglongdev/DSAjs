/* ============================== */
// NOTES: 'new' keyword for create new INSTANCE (1 đối tượng mới)
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello ${this.name}, you're ${this.age} yrs old.`);
//   }
// }
// const user1 = new Person("Nong", 25);
// user1.greet();
/* ============================== */

/* ============================== */
// class Student extends Person {
//   constructor(name, age, course) {
//     // 'super' keyword for inheritance props and method of class Person
//     // override new name and age
//     super(name, age);
//     this.course = course;
//   }
//   study() {
//     console.log(`${this.name} is studying ${this.course}.`);
//   }
// }
// const student1 = new Student("Nong", 25, "JavaScript");
// student1.greet();
// student1.study();
/* ============================== */

/* ============================== */
// NOTES: static method (dont need to use 'new' keyword)

// class CountNumber {
//   static add(num1, num2) {
//     return num1 + num2;
//   }
// }
// const addNumber = CountNumber.add(1, 2);
// console.log(addNumber);
/* ============================== */

/* ============================== */
// GETTER, SETTER
// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName() {
//     console.log(
//       `Your firstName: ${this.firstName}, lastName: ${this.lastName}`
//     );
//   }
//   set fullName(name) {
//     const [firstName, lastName] = name.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// const user = new User("Nong", "Bay");
// // getter
// user.fullName;
// // setter
// user.fullName = "Nong Koolz";
// user.fullName;
/* ============================== */

// all in one:
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} phát ra tiếng kêu.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   speak() {
//     super.speak(); // Gọi phương thức speak() của class cha
//     console.log(`${this.name} sủa: Gâu gâu!`);
//   }

//   static info() {
//     console.log("Đây là lớp Dog.");
//   }
// }

// const dog1 = new Dog("Lucky", "Husky");
// dog1.speak();
// // Output:
// // Lucky phát ra tiếng kêu.
// // Lucky sủa: Gâu gâu!

// Dog.info(); // Output: Đây là lớp Dog.

class User {
  constructor(name, age) {
    if (!name || !age) throw new Error("invalid name or age");
    this.name = name;
    this.age = age;
    console.log(this);
  }
}
const user = new User();
