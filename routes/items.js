var express = require("express");
var router = express.Router();

// Array of clothing items
var items = [
    {
        id: 1,
        itemName: "Stylish Jacket",
        itemDescription: "A modern, sleek jacket perfect for cool evenings.",
        itemImage: "https://via.placeholder.com/300",
    },
    {
        id: 2,
        itemName: "Casual T-Shirt",
        itemDescription: "A comfortable t-shirt for everyday wear.",
        itemImage: "https://via.placeholder.com/300",
    },
    {
        id: 3,
        itemName: "Elegant Dress",
        itemDescription: "A sophisticated dress for formal occasions.",
        itemImage: "https://via.placeholder.com/300",
    },
    {
        id: 4,
        itemName: "Classic Hoodie",
        itemDescription: "Stay cozy with this stylish and warm hoodie.",
        itemImage: "https://via.placeholder.com/300",
    },
    {
        id: 5,
        itemName: "Denim Jeans",
        itemDescription: "Classic, durable denim jeans for everyday use.",
        itemImage: "https://via.placeholder.com/300",
    },
    {
        id: 6,
        itemName: "Summer Sandals",
        itemDescription: "Comfortable sandals for sunny summer days.",
        itemImage: "https://via.placeholder.com/300",
    },
];

// GET items listing.
router.get("/", function (req, res, next) {
    res.json(items);
});

module.exports = router;
