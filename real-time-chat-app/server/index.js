import express from "express";
import dotenv from "dotenv/config";
import userRoutes from "./routes/user.js";
import messageRoutes from './routes/message.js';
import chatRoutes from './routes/chat.js';
import mongoDBConnect from "./mongoDB/connection.js";
import cors from "cors";

const app = express();

const corsConfig = {
  origin: process.env.BASE_URL,
  credentials: true,
};

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors(corsConfig));

app.use("/", userRoutes);

app.use("/api/message", messageRoutes);

app.use("/api/chat", chatRoutes);

mongoDBConnect();

const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT - ${PORT}`);
});
