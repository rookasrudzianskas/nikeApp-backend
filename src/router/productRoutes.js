const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct } = require('../database/products');

router.get('/', async (req, res) => {
  const products = await getAllProducts();
  res.send({ status: 'OK', data: products });
});

router.get('/:productId', async (req, res) => {
  try {
    const product = await getProduct(req.params.productId);
    res.send({ status: "OK", data: product });
  } catch (error) {
    res.status(404).send({ status: "FAILED", data: "Product not found" });
  }
});

module.exports = router;
