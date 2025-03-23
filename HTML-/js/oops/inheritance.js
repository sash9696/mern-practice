//user
//     name
//     score
//     increaseScore()

// admin
//     shareSomePublicMessage()
//     (all properties and functions from user are available)

//     owner

//     general

// paidUser
//     bonusScore
//     increaseBalance()
//     (all properties and functions from user are available)

//solution 2
//Factory function approach
//store the function in just one object
//and if the interprete doesnt find the function in user 1 , lookup to that object

// function createUser(name, score){

//     const newUser = Object.create(userFunctions);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser

// };
// const userFunctions={
//     getName: function(){
//         console.log(`I'm  ${this.name}`)
//     },
//     increment: function(){
//         this.score++;
//     }
// }

// function createPaidUser(paidName, paidScore, accountBalance){

//     const newPaidUser = createUser(paidName, paidScore);

//     //some linkage to the parent
//     Object.setPrototypeOf(newPaidUser, paidUserFunctions);
//     console.log('newPaidUser',{newPaidUser,paidUserFunctions})

//     newPaidUser.accountBalance = accountBalance;

//     return newPaidUser;
// };

// const paidUserFunctions = {
//     increaseBalance: function(){
//         this.accountBalance++;
//     }
// };

// const user1 = createUser('John', 5);

// user1.getName();

// Object.setPrototypeOf(paidUserFunctions, userFunctions);

// const paidUser1 = createPaidUser('Peter', 6, 40);

// paidUser1.increaseBalance();
// paidUser1.getName();

//solution3

//new keyword

// automating 2 things for us

// function createUser(name, score){
//     console.log('this',this)
//     this.name = name;
//     this.score = score;

// };

// createUser.prototype.getName = function(){
//     console.log(`I'm  ${this.name}`)
// };
// createUser.prototype.increment =function(){
//     this.score++;
// }
// const user1 = new createUser('John', 5);
// user1.getName();

// function createPaidUser(paidName, paidScore, accountBalance){

//     createUser.call(this, paidName, paidScore);

//     this.accountBalance = accountBalance;

// };
// createPaidUser.prototype = Object.create(createUser.prototype);

// createPaidUser.prototype.increaseBalance =function(){
//     this.accountBalance++;
// };

// const paidUser1 = new createPaidUser('Peter', 6, 40);
// console.log('createPaidUser',{createPaidUser,paidUser1})

// paidUser1.increaseBalance();
// paidUser1.getName();

// const obj = {
//     num: 10,
//     increment: function(){this.num++}
// }

// const otherObj = {
//     num: 20,
// };

// //this key word third pattern

// obj.increment.call(otherObj);

// function getAddress(city, country){

//     console.log(`${this.name} lives is ${city} in ${country}`);
// }

// const user1 = {
//     name:'john',

// };

// const user2 = {
//     name:'peter',

// };

// getAddress.call(user1, 'delhi', 'india');
// getAddress.call(user2, 'mumbai', 'india');

// getAddress.apply(user1, ['delhi', 'india']);
// getAddress.apply(user2, ['mumbai', 'india']);

//solution 4 using class keyword

// class createUser{
//     constructor(name, score){
//         this.name = name;
//         this.score= score;
//     };

//     getName(){
//         console.log(`I am ${this.name}`);
//     }

//     increment(){
//         this.score++;
//     }
// };

// const user1 = new createUser('John', 5);
// const user2 = new createUser('Peter', 10);

// class createPaidUser extends createUser{
//     constructor(paidName, paidScore, accountBalance){
//         super(paidName, paidScore);
//         this.accountBalance= accountBalance;
//     };

//     increaseBalance(){
//         this.accountBalance++;
//     }
// };

// const paidUser1 = new createPaidUser('Ali', 6, 40);
// paidUser1.increaseBalance();
// paidUser1.getName();

// let promise1 = Promise.resolve();

// let promise2 = Promise.resolve();

// let promise3 = Promise.resolve();


// promise1.then(() => console.log(1)).then(() => console.log(2));

// promise2.then(() => console.log(3)).then(() => console.log(4));
// promise3.then(() => console.log(5)).then(() => console.log(6));


// const person = {
//     firstName:'John',
//     lastName:'Doe',
//     fullName: function(){
//         console.log('this', this)
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// const person2 = {
//     firstName:'Peter',
//     lastName:'Smith',
// };

// const getFullName = person.fullName;
// const bindedGetFullName =getFullName.bind(person);
// //after 1000 lines code


// console.log(bindedGetFullName());



const button = document.querySelector('button');


const user = {
    name:'John',
    clickHandler: function(){
        console.log(`${this.name} clicked the button!`)
    }
};




button.addEventListener('click', user.clickHandler.bind(user));


// button = {

//     addEventListener: function(_, callback){
//         callback();
//     }
// }

// const callback = function () {
//     console.log('callback', this)
// };
// const user = {
//     name:'John',
//     clickHandler: function(_,callback){
//         console.log('this', this)
//         console.log(`${this.name} clicked the button!`)
//         callback();
//     }
// };

// user.clickHandler(10,callback)








