import cors from 'cors';
import express from 'express';
import productsRouter from './routes/products.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/products', productsRouter);

app.get("/", function(req, res, next) {
    res.send("API is working properly");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})


