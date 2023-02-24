const express = require('express');

const app = express();
const PORT = 3000;

app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log('API is listening on port ', PORT);
});
