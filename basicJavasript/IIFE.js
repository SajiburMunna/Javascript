//Immediately Invoked Function Expressions (IIFE)---after create function immediate call of function ...it can function private ..

// (function aDemoFunc() {
//   console.log("Hello World!");
// })();

// var sum = (function () {
//it can work for function  expression
//   return 10 + 20;
// })();
// console.log(sum);

//------

//its variable can not access from out side of a function ..if we want access a variable from function then we will retrun this variable in function..

// var controller = (function () {
//   var a = {
//     name: "Zonayed Ahmed",
//     uid: 1062,
//   };
//   return a;
// })();

// var interface = (function () {
//   return "Hello " + controller.name; //access from private function for retun a
// })();
// console.log(interface);
