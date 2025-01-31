// contructor function:
const Employee = function (name, age) {
  this.name = name;
  this.age = age;
};
Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};
Employee.prototype.getSalary = function () {
  return this.salary;
};

const employee1 = new Employee("Nong", 25);
employee1.setSalary(3000);
console.log(employee1.getSalary());
