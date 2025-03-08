//shallow copy

// let user = {
//   name: "John",
//   age: 20,
// };

// let user2 = {};

// for (let key in user) {
//   user2[key] = user[key];
// }

// user2.name = "Peter";

// console.log({ user, user2 });

// let user = {
//     name: "John",
//   };

//   let permissions1  = {canView:true};
//   let permissions2  = {canEdit:true};

//   //target object , sources (arguments)
// //   Object.assign(target,...sources);

// Object.assign(user,permissions1, permissions2);

// Object.assign(user,{name:'Peter'});
// console.log(user)

//spread operator

// let user = {
//   name: "John",
// };

// let clone = { ...user };

// clone.name = "Pete";

// console.log({ user, clone });


//deep cloning
let user2={};
let user = {
  name: "John",
  address: {
    city: "Delhi",
    country: "India",
  },
};

// for (let key in user) {
//   user2[key] = user[key];
// }
// user2[name]
// user2[age]
// user2[address] = user[address]

let clone = structuredClone(user);

clone.address.city = 'Mumbai';

console.log('user.address', user.address)
console.log('clone.address', clone.address)




