//functions are first class citizens

//u can store functions in a variable
//pass function inside a function as callbacks
//return a function from a function


//function delcaration
// function add(a,b){
//     return a + b;
// };

//unnamed function expression
// var add = function(a,b){
//     return a + b;

// };
// console.log(add(10,20));

//named function expression

// var add = function sum(a,b){
//     return a + b;

// };
// console.log(add(10,20));

//anonymous functions they can used insdie fucntions, events assigned to variables etc
// function(a,b){
//         return a + b;

//     };

//arrow function with explicit return
// var add = (a,b) => {
//     return a + b;
// };

//implicit return
// var add = (a,b) =>  a + b;

// console.log(add(10,20));

// function x(callback){

//     console.log(10);
//     callback();
// };

// function y(){
//     console.log(20);
// }

// x(y);

//  function add(a, b) {
//   return function () {
//     return a + b;
//   };
// };


// let sum = add(10,30);

// console.log(sum());



// function add(a, b = 0){
//     return a + b;
// };

// console.log(add(10,20))