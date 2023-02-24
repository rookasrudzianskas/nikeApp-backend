const express = require('express');
const productRoutes = require('./router/productRoutes');

const app = express();
const PORT = 3000;

app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('API is listening on port ', PORT);
});
