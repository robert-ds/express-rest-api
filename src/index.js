const express = require('express');
const {faker} = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Im Server');
});

app.get('/new-route', (req, res) =>{
  res.send('Hello, Im from new route');
});

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else {
    res.send('Dont params');
  }
});

app.get('/products/filter', (req, res) => {
  res.send('Im Filter');
});

app.get('/products', (req, res) =>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10;

  for(let i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(500,500,'auto')
    });
  }

  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const {id} =  req.params;
  res.json([
    {
      id,
      product: 'Boat',
      price: 1000
    }
  ]);
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.listen(port, () => {
  console.log('listen in port ' + port);
});
