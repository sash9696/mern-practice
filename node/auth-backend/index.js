const express = require("express");
const bcrypt = require('bcrypt');
const app = express();

const port = 5001;

//c => post
//r => get
//u => put and patch
//d => delete

app.use(express.json());

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
];
app.get("/", (req, res) => {
  res.send("Greetings!");
});

//register endpoint
app.post("/register", (req, res) => {
  console.log({ body: req.body });
  res.json({ status: "success", data: req.body });


  bcrypt.hash(req.body.password, 10)
  .then((hashedPassword) => {

    console.log('hashedPassword',hashedPassword)
  })

});

//login

app.post("/login", (req, res) => {});

app.get("/users", (req, res) => {
  res.json({ status: "success", data: users });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
