import express from "express";
import {getProducts, getProduct, createProduct, search, getTop} from "../server.js";
const router = express.Router();

router.get('/', async (req, res) => {
    const products = await getProducts();
    res.send(products)
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await getProduct(id);
    res.send(product)
});

router.post('/new', async (req, res) => {
    const {name, description, quantity} = req.body;
    const product = await createProduct(name, description, quantity);
    res.status(201).send(product);
});

router.get('/search/:name', async (req, res) => {
    const name = req.params.name;
    res.send(await search(name));
})

router.get('/top/:num', async (req, res) => {
    const result = await getTop();
    res.send(result);
})

export default router;