//Sum all the values of an array

const studentResult = [67, 90, 100, 37, 60];

const total = studentResult.reduce(
  (sum, currentValue) => sum + currentValue,
  0
);

console.log(total);

//Sum of values in an object array
const studentResult = [
  { subject: "Maths", marks: 78 },
  { subject: "Physics", marks: 80 },
  { subject: "Chemistry", marks: 93 },
];

const total = studentResult.reduce((sum, objValue) => sum + objValue.marks, 0);

console.log(total);
//Flatten an array of arrays
const twoDArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [5, 9, 10],
];

const oneDArr = twoDArr.reduce((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(oneDArr);

//Grouping objects by a property

const result = [
  { subject: "Physics", marks: 41 },
  { subject: "Chemistry", marks: 59 },
  { subject: "Pure Maths", marks: 36 },
  { subject: "Applied Maths", marks: 90 },
  { subject: "English", marks: 64 },
];

let initialValue = {
  pass: [],
  fail: [],
};

const groupedResult = result.reduce((accumulator, current) => {
  current.marks >= 50
    ? accumulator.pass.push(current)
    : accumulator.fail.push(current);
  return accumulator;
}, initialValue);

console.log(groupedResult);

//Remove duplicates in an array
const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const removeDuplicatedArr = duplicatedsArr.reduce(
  (accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  },
  []
);

console.log(removeDuplicatedArr);
