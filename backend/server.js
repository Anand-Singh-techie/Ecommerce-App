const express = require('express');
const products = require('./data/products')

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

app.listen(8080, ()=> {
    console.log('Server Running on Port 8080');
});