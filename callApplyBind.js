// call(), apply()
// Notes: the only dif between call() and apply() is the way we passed arguments
const printFullName = function (age, country) {
  console.log(
    `${this.firstName} ${this.lastName} ${age} yrs old, from ${country}`
  );
};

const user1 = {
  firstName: "Nong",
  lastName: "Bay",
};

const user2 = {
  firstName: "Pe",
  lastName: "Po",
};
printFullName.call(user1, 4, "HaNoi");
printFullName.apply(user2, [3, "HCM"]);

// bind()
// Notes: bind() and call() also the same,
// the dif is bind() bind the method into the obj,
// and return the copy of that method
const printMyName = printFullName.bind(user1, 25, "HCM");
printMyName();
