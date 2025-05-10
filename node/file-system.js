//file systems

let http = require("http");
let fs = require("fs");

// let server = http.createServer(function (req, res) {
//   fs.readFile("demo.html", function (err, data) {
//     console.log("data", { data });

//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     return res.end();
//   });
// });

// server.listen(3001);

//create files

// fs.appendFile('newfile.txt', 'Hello World!', function(err){
//     if (err) throw err;

//     console.log('Saved!');

// })

// fs.open()

// fs.writeFile()

// update the files

// fs.appendFile('newfile.txt', 'this is a dummy text', function(err){
//         if (err) throw err;

//     console.log('Updated!');
// })

// replace

// fs.writeFile("newFile.txt", "This is a lorem ipsum", function (err) {
//   if (err) throw err;

//   console.log("Replaced!");
// });


// fs.rename('newFile.txt', 'renamedFile.txt', function(err){
//       if (err) throw err;

//   console.log("Replaced!");
// })