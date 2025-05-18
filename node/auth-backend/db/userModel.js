const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    //email
    email:{
        type:String,
        required:[true, "Please provide an Email"],
        unique:[true, "Email exist"]
    },
    //password
    password:{
        type:String,
        required:[true, "Please provide a password"],
        unique:false
    },
})


module.exports = mongoose.model.Users || mongoose.model("Users",UserSchema);