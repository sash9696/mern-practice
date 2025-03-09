// js is synchronous single threaded language

//synchronous => top to bottom
//one task at a time => single threaded

// var message = 'hello';

// console.log(greetings('John'));

// function greetings(name){
//     return `${message} ${name}`
// };

// var message = "hello";

// //named function expression
// var greetings = function (name) {
//   return `${message} ${name}`;
// };

// console.log(greetings("John"));

// function x() {
//   var a = 10;
//   console.log(a);
//   y();
// }

// function y() {
//   var b = 20;
//   console.log(b);

//   z();
// }

// function z() {
//   var c = 100;
//   console.log(c);
// }

// x();

// function x() {
//     var a = 10;
//     console.log(a);

//   }

//   function y() {
//     var b = 20;
//     console.log(b);

//   }

//   function z() {
//     var c = 100;
//     console.log(c);
//   }

//   x();
//   y();
//   z();

//closure
//function bundled with its lexical environment forms a closure
// function counter(){

//     var count = 0;
//     return function (){
//         count  = count + 1;
//         console.log(count);
//     };
// };

// var countFn = counter();
// countFn();
// countFn();
// countFn();

// function factories
//create functions dynamically

//in closure the inner function remerbers the outer scope

// function makeMultiplier(factor){

//     return function (num){
//         return num*factor;
//     }
// };

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(5));
// console.log(triple(5));

//private variables

// function counter(){
//     let count = 0;

//     return {
//         increment: function(){
//             count ++;
//             console.log(count);
//         },
//         decrement: function(){
//             count --;
//             console.log(count);
//         },
//         getCount: function(){
//             return count;
//         },

//     }
// };

// const myCounter   = counter();

// myCounter.increment();
// myCounter.increment();
// myCounter.decrement();
// console.log(myCounter.getCount());

// function add(a){
//     return function(b){
//         return a + b;
//     }
// };

// console.log(add(10)(20));

// function add(a) {
//   return function x (b) {
//     if (!b) {
//       return a;
//     }
//    return add(a + b);
//   };
// }




// console.log(add(10)(20)(30)());

// add(10)(20)(30)(40)(50)();

// add(10)(20)(30)(40)

// a = 10
// b = 20
// a + b = 30

// add(30)(30)(40)

// add(60)(40)

// add(100)





// function x(){
//     setTimeout(function(){
//         //asynchronous 
//         console.log('hello');
//     }, 2000);

//     console.log('world');
// };

// x();

