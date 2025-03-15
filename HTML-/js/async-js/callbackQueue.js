// function greet(name){
//     setTimeout(function(){
//         //asynchronous 
//         console.log('hello');
//     }, 0);

//     console.log(name);
// };

// greet('John');

function runForOneSecond(){
    const start = Date.now(); 
    //current time stamp
    let currentTime = start;

    while(currentTime - start < 1000){
        currentTime = Date.now();
    };

    console.log('1 second')
}


function greet(name){

    setTimeout(function(){
        //asynchronous 
        console.log('hello');
    }, 0);
    runForOneSecond();
    console.log(name);
};

greet('John');


