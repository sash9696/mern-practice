//events in js

// let fs = require('fs');

// let stream = fs.createReadStream('./demofile.txt');

// stream.on('open', function(){
//     console.log('The file is open')
// })


//event emitter

let events = require('events');

let eventEmitter = new events.EventEmitter();

// console.log('eventEmitter',{eventEmitter});


//event handler will auto run once the event is triggered

let customEventEmitterFunc = function(){
    console.log('I hear a scream');
}

console.log({__dirname, __filename})

//assign a new event

eventEmitter.on('scream', customEventEmitterFunc);


//fire or triger the scream event

eventEmitter.emit('scream');