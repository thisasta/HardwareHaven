import express from "express";
import {getProducts} from "../server.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await getProducts();
    res.send(products)
});

module.exports = router;