const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('Sucessfully connected to Mongo DB Atlas!')
    })
    .catch((error) => {
        console.log('Unable to connect to Mongo DB Atlas!')
        console.log('Error connecting to db', error)

    })
}




module.exports = dbConnect;