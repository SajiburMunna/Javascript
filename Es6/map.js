// Calling a Function on Each Item in an Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = arr.map(function (item, index, fullArr) {
  return item * 2;
});
console.log(newArr);

const newArr2 = arr.map((item) => item * item);
console.log(newArr2);

// Reformatting Array Objects

const myUsers = [
  { name: "shark", likes: "ocean" },
  { name: "turtle", likes: "pond" },
  { name: "otter", likes: "fish biscuits" },
];

const usersByLikes = myUsers.map((item) => {
  const container = {};

  container[item.name] = item.likes;
  container.age = item.name.length * 10;

  return container;
});

console.log(usersByLikes);

//Converting a String to an Array

const name = "Sammy";
const map = Array.prototype.map;

const newName = map.call(name, (eachLetter) => {
  console.log(name);
  return `${eachLetter}a`;
});

console.log(newName);
