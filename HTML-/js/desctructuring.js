

// let arr = ["john", 'cena'];
// "John cena".split(' ')


//  let [firstName, lastName] =   arr ;

//  console.log(firstName, lastName)


// let a = 5;

// let b = 10;

// // a = a + b;
// // b = a - b;
// // a = a - b;


//   [a,b] = [b,a]

//   console.log(a,b)

// let user = {
//     name:'john',
//     age:20,
//     address:{
//         city:'mumbai',
//         country:'India'
//     }
// };


// let {age}  = user;

// let {age:dob}  = user;


// console.log(dob)

// let {age , address:{city}} = user;

// console.log(city)



// let nums = [10,20,30,40,50];

// let [num1, num2, ...rest] = nums;

// console.log(rest)


//  let [firstName, lastName = 'b']    = ['john', 'cena']

function defaultName(){
    return 'b'
}

let [firstName, lastName = defaultName()]    = ['john']


 console.log(firstName, lastName)