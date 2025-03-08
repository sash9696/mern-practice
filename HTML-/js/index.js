//imp array methods
//return new array
// let users = [
//   { id: 1, name: "john", age: 20 },
//   { id: 2, name: "peter", age: 30 },
//   { id: 3, name: "pete", age: 40 },
// ];

//filter

// let someUsers = users.filter(function(item, index, array){

//     return item.id < 3;
// });

// let someUsers = users.filter( item => item.id < 3);
// console.log(someUsers);
// console.log(users);

// pollyflls

// Array.prototype.myFilter = function (callback) {
//   let result = [];

// //   console.log("this", this);

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };

// let someUsers = users.myFilter(function (item, index, array) {
//   return item.id < 3;
// });

// console.log(someUsers);
//function as an argument (callback)
//new array of that values that satisfies the condition

//map (transform an array)

let nums = [10, 20, 30];

Array.prototype.myMap = function (callback) {
    // console.log('this', this)
  let result = [];

  //   console.log("this", this);

  for (let i = 0; i < this.length; i++) {
    let transformedValue = callback(this[i], i, this);
    result.push(transformedValue);
  }

  return result;
};

let doubledNums = [10,20,40].myMap((item, index, array) => {


   return ({ [index] : item * 2})
} );

// let doubledNums = nums.map((num) => num * 2);
// let doubledNums = nums.map(function(num, index, nums){

//     return num * 2;
// });
// let doubledNumsObj = nums.map(function(num, index, nums){

//     return ({[num] : num * 2});
// });

// console.log(doubledNums);

//reduce



// let user = {
//     name:'john',

//     getName: function(){
//         console.log('this', this)
//     }
// };

// user.getName();