var express = require('express');
var router = express.Router();

// Array of clothing items
var items = [
  { id: 1, name: 'Stylish Jacket', description: 'A modern, sleek jacket perfect for cool evenings.', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Casual T-Shirt', description: 'A comfortable t-shirt for everyday wear.', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Elegant Dress', description: 'A sophisticated dress for formal occasions.', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Classic Hoodie', description: 'Stay cozy with this stylish and warm hoodie.', image: 'https://via.placeholder.com/300' },
  { id: 5, name: 'Denim Jeans', description: 'Classic, durable denim jeans for everyday use.', image: 'https://via.placeholder.com/300' },
  { id: 6, name: 'Summer Sandals', description: 'Comfortable sandals for sunny summer days.', image: 'https://via.placeholder.com/300' }
];

// GET items listing.
router.get('/', function (req, res, next) {
  res.json(items);
});

module.exports = router;