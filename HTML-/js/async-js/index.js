//ecommerce platform

// get orders
// proceed to checkout
//proceed to payment

// Callback based asynchronous approach

// const orders = [
//   { id: 1, item: "Laptop", price: 40000 },
//   { id: 1, item: "IPhone", price: 100000 },
// ];

// function getOrders(callback) {
//   setTimeout(function () {
//     console.log(`Orders fetched: `, orders);
//     callback(null, orders);
//   }, 1500);
// }
// function proceedToCheckout(orders, callback) {
//   setTimeout(function () {
//     console.log(`Proceeding to checkout with orders: `, orders);
//     callback(null, orders);
//   }, 1000);
// }
// function proceedToPayment(orders, callback) {
//   setTimeout(function () {
//     console.log(`Proceeding to payment with orders: `, orders);
//     callback(null, "payment successfull!");
//   }, 1200);
// }

// getOrders(function (err, orders) {
//   if (err) {
//     console.error("Error fetching orders: ", err);
//     return;
//   }

//   proceedToCheckout(orders, function (err, orders) {
//     if (err) {
//       console.error("Error during checkout: ", err);
//       return;
//     }

//     proceedToPayment(orders, function (err, message) {
//       if (err) {
//         console.error("Error during payment: ", err);
//         return;
//       }
//       console.log(message);
//     });
//   });
// });

// Callback hell

// inversion of control

// no proper error handling mechanism

//u cannot see whats actually happening in the background

// Promises

//

const orders = [
  { id: 1, item: "Laptop", price: 40000 },
  { id: 1, item: "IPhone", price: 100000 },
];

function getOrders() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Orders fetched: `, orders);
      resolve(orders);
    }, 1500);
  });
}

//   const promise = new Promise(function(resolve, reject){
//     const err = true;

//     if(err){
//         reject('Something went wrong');
//     }
//     resolve(10);
//   })

//   console.log(promise);

function proceedToCheckout(orders) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Proceeding to checkout with orders: `, orders);
      resolve(orders);
    }, 1000);
  });
}
function proceedToPayment(orders) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Proceeding to payment with orders: `, orders);
      resolve("Payment Successfull");
    }, 1200);
  });
}

// getOrders()
//     .then(function(orders){
//         return proceedToCheckout(orders)
//     })
//     .then(function(orders){
//         return proceedToPayment(orders);
//     })
//     .then(function(message){
//         console.log(message);
//     })
//     .catch(function(err){
//         console.log("Error: ", err);
//     })

// cleaner and readable
//error handling
//avoid callback hell

//promise hell
//async await
//more cleaner way and elegant appraoch
//it uses promises

//more maintanable more cleaner ,
// async function processOrder() {
//   try {
//     const orders = await getOrders();

//     await proceedToCheckout(orders);

//     const message = await proceedToPayment(orders);

//     console.log(message);
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// }

// processOrder();

// const url =
// "https://jsonplaceholder.typicode.com/posts";
// function getPosts() {
//   fetch(url)
//     .then((data) => {
//       console.log(data);
//       return data
//     })
//     .then(() => {
//         return data
//     })
//     .then((data) => {
//         return data
//     })
//     .catch((err) => {
//       console.error("Error: ", err);
//     });
// }
// getPosts();

// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.error('Error: ', err)
//     })

// let user = {

//     name:'john',

//     greet: function () {
//             console.log(`greetings ${this.name}`)
//     }
// };

// user
//     .greet()

// console.log("start");

// setTimeout(() => {
//   console.log("timeout called");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise resolved");
//   })
//   .then(() => {
//     console.log("Second then resolved");
//   });

// console.log("end");

function getWeather() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({ temperature: 25, condition: "rainy" });
    }, 1000);
  });
}
function getStockPrice() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ stock: "ICICI", price: 1240 });
      // reject('Something went wrong not able get stock price');
    }, 500);
  });
}

function getNews() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ headline: "Stock market all time low!" });
      //   reject('Something went wrong not able get stock price');
    }, 1500);
  });
}

// //to diaplay the data together
// //get all this data concurrently

// Promise.all([getWeather(), getStockPrice(), getNews()])
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((err) => {
//         console.error('Error fetching data: ', err)
//     })

// efficient => 1.5 seconds (total time will be the time of longest api call)

//sequentially => 3 secs

// polyfill of promise all
// it takes array of promises
// it returns a new promise

//that promise returns new array of values  in the same order of promises

//it rejects if any one of them rejects

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// function myPromiseAll(promises) {
//   if (!Array.isArray(promises)) {
//     throw new TypeError("The argument is not an array");
//   }
//   let resolvedPromises = [];
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then((value) => {
//           resolvedPromises[index] = value;

//           if (promises.length === resolvedPromises.length) {
//             resolve(resolvedPromises);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// }

// myPromiseAll([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// myPromiseAll([getWeather(), getStockPrice(), getNews()])
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((err) => {
//         console.error('Error fetching data: ', err)
//     })

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "quick")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "slow")
);

const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

function myPromiseAny(promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError("The argument is not an array");
  }
  let rejectedPromises = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          rejectedPromises[index] = error;

          if (promises.length === rejectedPromises.length) {
            reject(rejectedPromises);
          }
        });
    });
  });
}
myPromiseAny(promises).then((value) => console.log(value));
