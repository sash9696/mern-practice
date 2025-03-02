

//js was used to make web pages alive
//programs we write in this lang are called scripts

//earlier livescript

//sepcification is ecmascript

//javascript can execute not only in browser , but also on server or any other device
//that a javascript engine(special program)

//browser has this embedded engine called javascript virtual machine

//v8 => chrome, opera , edge
//spidermonkey => firefox
//chakra
//squirrelfish => safari


// engine parses the script
//it compiles the script to machine
//machine code executes quickly

//Note at every point the engine does various optmizations 


//javascript in browser?

//it depends on the environment u r running

//add new html, modify or change existing content, modify styles
//react to user events, run on mousclick, mouse over, key presse
//send requests over the network to the servers 
//get and set cookies ex=> show messages, user prferences
///remember the data on the client side (local storage, indexed db)

//web apis


//js cant do in browser?

//js cannot read and write to the harddisk. no access directly to os functions

//there ways to interact with camera, microphones but with user's explicit permissions

//diffetent tabs / windows generally dont know abt each other
//same orgin policy

//http

//coffeescript, typescript , flow, dart, kotlin



//compatibities issues

//es5 => use strict



// "use strict" => always on the top of the page
// classes and modules implement it behind the scenes

//Variables

//named storage

// let message;

// message = 'hello world';

// let message = 'hello world';

// let user='john', age=20, message='Greetings';

// console.log(message);


// var message = 'hello';

// console.log(message);


//rules for variable naming

// name must contain leters, digits or $ and _
//the first char should not be a digit


// let $=1;
// let _ = 'hello';

// "use strict"

// name = 'john';

// console.log(name);


// let name = 'john';


// name = 10;

// console.log(name);

// const dob = '20.20.2001';

// dob = 'dsadflsjanl'


// const COLOR_RED =  '#F04304F';


//Data types

// 8 data types


//numbers (both int and floating point)

//special values => Infinity, -Infinity and NaN

// console.log(10/0);

// console.log(Infinity);


// console.log('das'/ 20);


// console.log(NaN ** 0);


// BigInt

// ? (2^53 -1 ) to < -(2^53 -1 )
//64 bit storage it will store the approx value if not used as a bigint

//ex crytography, microsecond precision timestamp, youtube views count

// const bigInt  = 36263726327368236826328368236823682638263826382362863826382362863283n;

// console.log(typeof bigInt);



//strings

// '' "" , `` (extended functionality)

// console.log(`${1+2}`);

// let name = 'john';

// console.log(`Hello , ${name}`)


//Boolean

// let doesNameExists = false;

// let isAdmin  = true;

// console.log(10 > 2);


//null

//value is unknown or will be caluculated in future

// let age = null;
// //calucate the age 

// //undefined
// // let age; 
// //value that is not assigned

// console.log(age)


// Objects and symbols
//all the other types are called as primitive types or scalars
//special type
//it is used to create complex entities
