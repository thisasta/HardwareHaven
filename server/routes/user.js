import express from "express";
import {getTop, getUsers, newUser} from "../server.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post('/register', async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const username = `${firstName}_${lastName}`.toLowerCase();
    const salt = bcrypt.genSaltSync(12);
    const user = newUser(firstName, lastName, email, await bcrypt.hash(password, salt));
    res.status(201).send(user);
})

router.get('/all', async(req, res) => {
    try {
        const result = await getUsers();
        res.send(result);
    } catch (error) {
        console.error('Error fetching Users:', error);
        res.status(500).send('Internal Server Error');
    }
})

export default router;