// const user2 = {};

// user2.name = "Peter";
// user2.score = 10;

// user2.increment = function () {
//   user2.score++;
// };

// const user3 = Object.create(null);

// user3.name = "Pete";
// user3.score = 6;

// user3.increment = function () {
//   user3.score++;
// };

// DRY 
//millions of users

// Solution 1
//generate the objects using a function

// function createUser(name, score){
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function(){
//         newUser.score++;
//     };
//     return newUser;
// };

// const user1 = createUser('John', 5);
// const user2 = createUser('Pete', 10);
// user1.increment()
// console.log(user1);

//solution2 

//store the function in just one object
//and if the interprete doesnt find the function in user 1 , lookup to that object


// const storeFunction = {
//     increment: function(){ this.score ++},
//     login: function(){console.log("You're logged in")}
// };

// const user1 = {
//     name:'John',
//     score:5
// };

// console.log(user1.name);
// user1.increment();




// function createUser(name, score){
//     const newUser = Object.create(userFunctionStore);
//     console.log('newUser',newUser)
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };
// const userFunctionStore = {
//     increment: function(){ this.score ++},
//     login: function(){console.log("You're logged in")}
// };
// const user1 = createUser('John', 5);
// const user2 = createUser('Pete', 10);
// user1.increment();
// user2.login();
// console.log(user1);


// const obj2 = {
//     isAdmin:true,
//     goThere:() => {

//     }
// } 


// const obj1 = {
//     name:'john'
// } 
// const obj = Object.create(obj2);

// console.log(obj)

// [[Prototype]] => __proto__

// obj1.__proto__ = obj2;
//not recommended


//solution3

//new keyword

// automating 2 things for us

//create a new user object 
//return the user object for us


// But
//where to put now the single copies of our question
//how to we refer the automatically created object

// function createUser(name, score){
//     this.name = name;
//     this.score = score;
// }

// // 
// // createUser.prototype
// createUser.prototype.increment = function(){
//     this.score ++;
// }
// createUser.prototype.login = function(){
//     console.log('login')
// }
// const user1 = new createUser('john', 5);
// user1.increment();

//faster to write
//typical practice in professional code

// using the fact that all functions have a default property prototype
//which is also an object to replace our userFunctionStore

//


// function multiply(a,b){
//     return a*b;
// };

//multiply => function version and object version

// multiply.prototype.x = 'John';
// multiply(10,20);

// console.log(multiply.prototype)



// function CreateUser(name, score){
//     this.name = name;
//     this.score = score;
// }

// // 
// // createUser.prototype
// CreateUser.prototype.increment = function(){
//     this.score ++;
// }
// CreateUser.prototype.login = function(){
//     console.log('login')
// }
// const user1 = new CreateUser('john', 5);
// user1.increment();



//solution4
// class syntactic sugar

// class CreateUser{
//     // constructor(name, score){
//     //     this.name = name;
//     //     this.score = score;
//     // };
//     increment(){
//         this.score++;
//     }
//     login(){
//         console.log('Login')
//     }
// }

// const user1 = new CreateUser('john', 5);
// user1.increment();


// try creatinf subclassing or inheritance using this syntax