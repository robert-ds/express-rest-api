
const express = require('express');
/**
 * librery to create fake data
 */
const {faker} = require('@faker-js/faker');
const router = express.Router();

router.get('/filter', (req, res) => {
  res.send('Im Filter');
});

router.get('/', (req, res) =>{
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

router.get('//:id', (req, res) => {
  const {id} =  req.params;
  res.json([
    {
      id,
      product: 'Boat',
      price: 1000
    }
  ]);
});

module.exports = router;
