
const express = require('express');
const router = express.Router();

let orders = [];
let nextId = 1;

router.post('/', (req, res) => {
  const { items, customer } = req.body;
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({error:'available item'});
  }
  const order = { id: nextId++, items, customer, status: 'created', createdAt: new Date() };
  orders.push(order);
  res.status(201).json(order);
});

router.get('/:id', (req, res) => {
  const o = orders.find(x => x.id === parseInt(req.params.id));
  if (!o) return res.status(404).json({error:'Not found'});
  res.json(o);
});

module.exports = router;
