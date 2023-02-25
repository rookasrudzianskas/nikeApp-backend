const express = require('express');
const router = express.Router();

router.get('/:reference', async (req, res) => {
  res.send(`Get order ${req.params.reference}`);
});

router.post('/', (req, res) => {
  res.send('Creating an order');
});
