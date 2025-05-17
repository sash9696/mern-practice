//modules

//js libraries


//open source

//use js on the server


// generate dynamic page content
//crud on files on server
//collect form data
//crud operations on database

let http = require('http');
let date = require('./custom-module');
let url = require('url');

//split the query string

let server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

   let query = url.parse(req.url, true).query;

   let text = `${query.year} ${query.month}`
    res.write(text);
    res.end();


})

server.listen(3000); //server object is listening on port 3000
