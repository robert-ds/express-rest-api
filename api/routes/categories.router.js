const express = require('express');
const CategoriesService = require('../services/categories.service');
const router = express.Router();
const service = new CategoriesService();

router.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  });
});

router.get('/', (req, res) => {
  res.json(service.find());
});

module.exports = router;