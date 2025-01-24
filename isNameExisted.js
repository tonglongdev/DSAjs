const userList = [
  {
    id: 0,
    name: "Nong",
    age: 21,
  },
  {
    id: 1,
    name: "Po",
    age: 21,
  },
  {
    id: 2,
    name: "Po iu",
    age: 21,
  },
];

/* for loops */
// const isNameExisted = (name, users) => {
//   let isExisted = false;
//   for (let i = 0; i < users.length - 1; i++)
//     if (users[i].name === name) isExisted = true;
//   return isExisted;
// };

/* some */
// const isNameExisted = (name, users) => users.some((user) => user.name === name);

/* find */
// const isNameExisted = (name, users) =>
//   Boolean(users.find((user) => user.name === name));

/* findIndex */
const isNameExisted = (name, users) => {
  const index = users.findIndex((user) => user.name === name);
  return index !== -1;
};
console.log(isNameExisted("Poo", userList));
