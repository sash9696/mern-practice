//open source

//use js on the server


// generate dynamic page content
//crud on files on server
//collect form data
//crud operations on database

let http = require('http');


let server = http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello World');


})

server.listen(3000);
