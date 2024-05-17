import express from "express";
import {newUser} from "../server.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post('/register', async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const username = `${firstName}_${lastName}`.toLowerCase();
    const salt = bcrypt.genSaltSync(12);
    const user = newUser(firstName, lastName, username, email, await bcrypt.hash(password, salt));
    res.status(201).send(user);
})

export default router;