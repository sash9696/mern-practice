

// console.dir(document.body)

// let user = {name:'john', age:20};


// let body = document.body;

//adding elements


// body.append('hello world', 'dhasdhhsai');

// appenchild cannot be used to add a text
// body.appendChild('hello world');

// let div = document.createElement('div');

// //add a text
// // div.innerText = 'hello world';

// div.textContent = 'hello world';

// body.appendChild(div);
// console.log(div)

// let div  = document.querySelector('div');
// console.log(div.innerText);
// console.log(div.textContent);



// 

// let body = document.body;

// let div = document.createElement('div');
// let strong = document.createElement('strong');


// strong.innerText = 'Hello world';

//make this text bold
//style
// div.append(strong);
// div.innerHTML = '<strong><em> Hello World </em></strong>'
// body.append(div);


// accessing elements

let body = document.body;
let div = document.querySelector('div');

let spanOne = document.querySelector('#dom');
let spanTwo = document.querySelector('#manp');


//remove elements

// spanTwo.remove();

// div.removeChild(spanTwo);

// div.appendChild(spanTwo);


//attributes

//getting attributes
// console.log(spanOne.getAttribute('name'));
// console.log(spanOne.id);

//set 

// spanTwo.setAttribute("title", "b");

// spanTwo.title = 'b';

// spanOne.removeAttribute('id');

// console.log(spanOne.dataset.name)

// spanOne.dataset.newName = 'newName'

// classes

// spanOne.classList

// spanOne.className

// spanOne.classList.add('new-class');
// spanOne.classList.remove('a1')

// spanOne.classList.toggle('a1');

// spanOne.style.color = 'red';
// spanOne.style.backgroundColor = 'green';


// input => add button
//  clicks on add u have to add the element on the screen

// item 1
// item 2