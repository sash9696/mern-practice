const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const port = 5001;

//c => post
//r => get
//u => put and patch
//d => delete

const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');
const auth = require('./auth');
dbConnect();
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

  bcrypt.hash(req.body.password, 10)
  .then((hashedPassword) => {

    // create a new user instance and collect the data

    const user = new User({
        email:req.body.email,
        password:hashedPassword
    });

    //save the user 
    user
        .save()
        .then((result) => {
            const user = result.toObject();

            delete user.password;

            res.status(201).send({
                message:'User Created Successfully',
                result:user
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:'Error creating user',
                error
            })
        })



  })
  .catch((error) => {
    res.status(500).send({
        message: 'Password was not hashed successfully',
        error
    })
  })

});

//login

app.post("/login", (req, res) => {
    const email= req.body.email;

    //check if the email exists

    User.findOne({email:email})
        .then((user) => {

            // if(!user){
            //     res.status(404).send({
            //         message:'Email not found',
            //     })
            // };
            if(!user){
                throw new Error('Email not found')
            };


            //we got the user
            
            bcrypt
                .compare(req.body.password,user.password)
                .then((matched) => {

                    if(!matched){
                        return res.status(400).send({
                            message:'Passwords do not match',
                        })
                    };

                    //create a jwt token
                    const token = jwt.sign(
                        {
                            userId:user._id,
                            userEmail: user.email
                        },
                        "RANDOM-TOKEN",
                        {
                            expiresIn:'24h'
                        }
                    );

                    res.status(200).send({
                        message:"Login Successful",
                        email: user.email,
                        token
                    })
                })


        })
        .catch((error) => {
            res.status(404).send({
                message:'Email not found',
                error
            })
        })


});

app.get("/users", (req, res) => {
  res.json({ status: "success", data: users });
});

//free apis
app.get("/free-endpoint", (req, res) => {
    res.json({ status: "success", message: 'You are free to access me anytime' });
  });
  

//authenticated apis
app.get("/auth-endpoint",auth, (req, res) => {

    res.json({ status: "success", message: 'You are authorized to access me' });
  });



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


module.exports = app;