const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Im Server');
});

app.get('/new-route', (req, res) =>{
  res.send('Hello, Im from new route');
});

app.get('/products', (req, res) =>{
  res.json({
    product: 'Boat',
    price: 1000
  });
});

app.listen(port, () => {
  console.log('listen in port ' + port)
});
