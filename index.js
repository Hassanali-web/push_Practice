
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

// Serve static frontend
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => res.status(200).json({status: 'ok'}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
