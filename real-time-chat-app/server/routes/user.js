import express from "express";
import { getUserById, googleAuth, login, logout, register, searchUsers, updateInfo, validUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post('/auth/register', register);
router.post('/auth/register', login);

router.get('/auth/valid', validUser);

router.get('/auth/logout', logout);

router.post('/api/google', googleAuth);

router.get('/api/user?', searchUsers);

router.get('/api/users/:id', getUserById);

router.patch('/api/users/update/:id', updateInfo);

export default router;