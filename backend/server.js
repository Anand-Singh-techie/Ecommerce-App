const express = require('express');
const products = require('./data/products')
const dotenv = require("dotenv")

// dotenv config
dotenv.config();

const app = express();

app.get('/',(req,res) =>{
    res.send('<h1>Welcome Anand</h1>');
});

app.get('/products', (req,res)=>{
    res.json(products);
});

app.get('/products/:id', (req,res)=>{
    const product = products.find((p) => p._id === req.params.id)
    res.send(product);
});

const PORT = 8080;
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
});