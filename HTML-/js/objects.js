//key value pairs

//store keyed collections of various data and complex entities

// let user1 =  new Object();  //object constructor syntax
// let user2 = {}; //object literal syntax

// let user = {
//     name: "John",
//     age:20,
//     city:'Mumbai'
// };
// console.log(user.age);
// console.log(user['name']);

// let user = {
//     name: "John",
//     age:20,
//     city:'Mumbai',
//     "is admin":true
// };

// console.log(user['is admin']);

// user.country  = 'India';
// console.log(user);

// let user = {
//     name: "John",
//     age:20,
//     city:'Mumbai',
//     country:"India"

// };

// let answer = prompt('What do u want to know about the user?', 'name');

// console.log(user[answer]);

// let user = {
//   name: "John",
//   age: 20,
//   address: {
//     city: "Mumbai",
//     country: "India",
//     pincode: 49343,
//   },
// };

// // user.address.city

// console.log(user['address']['city'])

//4 users with name and age

// function createUser(name, age) {
//   return {
//     name:name,
//     age:age,
//     city:undefined
//   };
// };

// let user1 = createUser('john', 20);
// let user2 = createUser('peter', 30);


// console.log('city' in user1);



// let user = {
//     name: "John",
//     age: 20,
//     address: {
//       city: "Mumbai",
//       country: "India",
//       pincode: 49343,
//     },
//   };


//   for(let key in user ){
//     console.log( user[key])
//   }

// delete user.age



// there are different kinds of inbuilt objects
//Array, Date, Error and son


//Object references

//objects are stored and copied by reference
//whereas primitive values are copied as a value

let num = 10;

let num2  = num;

//box1 (num) => 10
//box2 (num2) => 10

num = 30;
//box1 (num) => 30
//box2 (num2) => 10

// let user={
//     name:'john',
// };


// let admin = user;

// //     user  =>   {name}  <= admin

// admin.name = 'dasdas'



// let a = {};

// let b = {};

// console.log(a == b); //false


// let a = {};

// let b = a;

// console.log(a == b); //true


const user = {
    name:'john',
    age:20
};


user.name = 'Peter';

user = 10;
console.log(user)

//it should always reference the same object even if the properties change


//copy of the objects
//shallow copy and deep copy
