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
async function processOrder() {
  try {
    const orders = await getOrders();

    await proceedToCheckout(orders);

    const message = await proceedToPayment(orders);

    console.log(message);
  } catch (error) {
    console.error("Error: ", error);
  }
}

// processOrder();

const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  try {
    const response = await fetch(url);

    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error("Error: ", error);
  }
}

getPosts();

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
