//---if  we are return parent functin then we can access variable from parent function in child function.bcz ruturn variable store  in memory ...

// function closuresDemo() {
//   var x = 10;
//   return function () {
//     var y = 20;
//     console.log("Sum: " + (x + y));
//   };
// }
//closuresDemo()(); //here access two function main fucntion and retrun function ...
//another way to call function
// var aVar = closuresDemo(); //main
// var total = aVar(); //retrun function call
// console.log(total);
//------

//function with  parameters

// function aParentFunc(a) {
//   return function (b) {
//     console.log("Sum: " + (a + b));
//   };
// }
// aParentFunc(6)(4); //one way for call

// var aParentVar = aParentFunc(6); //another way for call
// var total = aParentVar(4);
