//---scope - right access area in function and object

//local scope

// function localScope() {
//   var local = "i am sojib";
//   console.log(local);
// }
// localScope(); //right call
// console.log(local); //worng access --we can not acess local variable
//--------
//golobal scope

// var globalVar = "I am a Global Variable"; //global decliaration  --so we can access anywhere

// function globalScope() {
//   console.log("Inside a Function: " + globalVar); //global var access
// }

// globalScope(); //function call

// console.log("Outside: " + globalVar); //right access!
//--------

// function anoGlobalFunc() {
//   console.log("Global Function");
//   function localFunc() {
//--local function -it can not access out of global function
//     console.log("Local Function");
//   }
//   localFunc(); //right call
// }

// anoGlobalFunc(); //right call
// localFunc();//worng call bcz it is local function
//--------

//---scope for object

// function objectFunc() {
//same case like function
//   var localObj = {
//     name: "Zonayed Ahmed",
//     age: 21,
//   };
//   console.log(localObj);
// }
// objectFunc(); //right acess
// console.log(localObj);//worong access
//------------

//--Lexical scoping -create relation between parentFunction and childFunction

// function parentFunction() {
//   var a = 6;
//   function childFunction() {
//     var b = 4;
//     console.log("Sum: " + (a + b)); //access a from parent function
//   }
//   childFunction();
// }

// parentFunction(); //sum :10
// childFunction(); //worng access
