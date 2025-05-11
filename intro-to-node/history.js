

//allows you to run javascript code outside of the web browser
//ryan dahl created node js
//2009 limited core modules http server, fs, for streams
//used in combination like database, frontend frameworks, cloud platforms to create full stack apps

//efficient and scalable i/o model that is based on non blocking event driven architecture

//event loop

//callbacks

//non blocking apis like fs 

//single threaded

//blocking
// const getUserSync = (userId) => {
//     const users = {
//         1:{name:'john', age:30},
//         1:{name:'Pete', age:20},

//     };

//     return users[userId];
// };

// const user = getUserSync(1);
// console.log(user);

//non blocking code
// const getUserAsync = (userId, callback) => {
//     const users = {
//         1:{name:'john', age:30},
//         2:{name:'Pete', age:20},

//     };

//     setTimeout(() => {
//         callback(users[userId])
//     }, 1000)
// };

// getUserAsync(1, (user) => {
//     console.log(user);
// });



// browser vs node js

//browser
// console.log(window)



// in node JS

// console.log(global)

//modules

//browser
{/* <script type='module' src='./module.js'></script>

import {greetings} from './module.js'


//node
require and import
import {greetings} from './module.js' */}


// DOM

//browser
//document.getElementById()

//node js there is no DOM

// server vs website


//node js is mainly used for server side apps while browser is used for websites


// console.log



// process and enviroments

//process is also a global objects

// process.argv => array that contains command line arguments
// process.pid=> the id of the current process
// process.env=> an object that contains environment variables of the current process
// process.exit() =>terminates the current process with an optiona exit ConvolverNode

// console.log(process.argv)