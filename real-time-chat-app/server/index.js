import express from 'express';
import dotenv from 'dotenv/config';
import userRoutes from './routes/user.js';
import mongoDBConnect from './mongoDB/connection.js';

const app = express();



const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use('/', userRoutes);

mongoDBConnect();

const server = app.listen(PORT, () => {
    console.log(`Server listening on PORT - ${PORT}`);
})