import express from "express";
import {newUser} from "../server.js";
const router = express.Router();

router.post('/register', async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const user = newUser(firstName, lastName, email, password);
    res.status(201).send(user);
})

export default router;