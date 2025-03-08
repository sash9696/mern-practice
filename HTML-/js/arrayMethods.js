//array methods

//delete element?

// let arr = [10,20,30];

// delete arr[1];

// console.log(arr.length);

//swiss knife , remove , add and replace the elements
//arr.splice(startIndex, deleteCount, elem1, elem2);

// let arr = [10,20,30];

// arr.splice(1,1);
// arr.splice(0, 2, 'hello', 'world');

// arr.splice(0, 0, 'hello', 'world');

// arr.splice(-1, 0, 'hello', 'world');

// console.log(arr);

// let arr = [10,20,30];

// slice
//does not include the endIndex
//arr.slice(starIndex, endIndex)

// console.log(arr.slice(0,2));

// console.log(arr.slice(-2));
// console.log(arr);

// let copy = arr.slice();
// copy[0] = 100;

// console.log('arr',arr)
// console.log('copy',copy)

//concat

let nums = [10, 20, 30];

// console.log(arr.concat([2,4], [5,6], [{name:'john'}]));

//iterate

// nums.forEach(function(num, index, nums){

//     console.log(`${num} is at index ${index} in ${nums}`);

// });

//searcj in an array

//indexof / lastindexof includes

// let arr = [1,0, false];

// console.log(arr.indexOf(0)); //1
// console.log(arr.indexOf(false)); //2
// console.log(arr.indexOf(null)); //-1

// console.log(arr.includes(1));

// console.log(0 === false);

// let arr = [1,0, 1];

// console.log(arr.indexOf(1));

// console.log(arr.lastIndexOf(1));

// let arr = [NaN];

// console.log(arr.indexOf(NaN)); // -1 wrong it should 0

// console.log(arr.includes(NaN));

// find, findIndexOf findLastIndex

let users = [
  { id: 1, name: "john", age: 20 },
  { id: 2, name: "peter", age: 30 },
  { id: 3, name: "pete", age: 40 },
  { id: 4, name: "john", age: 50 },

];

//find the user that has id of 1

// let user = users.find(function(user){
//     return user.id == 1;
// });

let user = users.find((user) => user.id == 1);

// let userIndex = users.findIndex((user) => user.name == 'peter');

let userIndex = users.findLastIndex((user) => user.name == 'john');


console.log(userIndex);


