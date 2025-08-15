
const express = require('express');
const router = express.Router();

// In-memory product store
let products = [
  { id: 1, name: 'Sneakers', price: 59.99 },
  { id: 2, name: 'T-Shirt', price: 19.99 },
  { id: 3, name: 'Jeans', price: 49.99 }
];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const p = products.find(x => x.id === parseInt(req.params.id));
  if (!p) return res.status(404).json({error:'Not found'});
  res.json(p);
});

module.exports = router;
