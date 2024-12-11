var express = require("express");
var router = express.Router();

// Array of clothing items
var items = [
    {
        id: 1,
        itemName: "Stylish Jacket",
        itemDescription: "A modern, sleek jacket perfect for cool evenings.",
        itemImage: "https://m.media-amazon.com/images/I/71SpAC86v+L._AC_UY1000_DpWeblab_.jpg",
    },
    {
        id: 2,
        itemName: "Casual T-Shirt",
        itemDescription: "A comfortable t-shirt for everyday wear.",
        itemImage: "https://m.media-amazon.com/images/I/21dimPnDdjL._AC_SY580_.jpg",
    },
    {
        id: 3,
        itemName: "Elegant Dress",
        itemDescription: "A sophisticated dress for formal occasions.",
        itemImage: "https://m.media-amazon.com/images/I/51Kt9mZE-jL._AC_SL1500_.jpg",
    },
    {
        id: 4,
        itemName: "Classic Hoodie",
        itemDescription: "Stay cozy with this stylish and warm hoodie.",
        itemImage: "https://cdn.shopify.com/s/files/1/1137/5270/files/CLASSIC-HOODIE-3610-PEARL-GREY-1.jpg?v=1725546301",
    },
    {
        id: 5,
        itemName: "Denim Jeans",
        itemDescription: "Classic, durable denim jeans for everyday use.",
        itemImage: "https://www.mrporter.com/variants/images/10163292708421485/in/w2000_q60.jpg",
    },
    {
        id: 6,
        itemName: "Summer Sandals",
        itemDescription: "Comfortable sandals for sunny summer days.",
        itemImage: "https://m.media-amazon.com/images/I/71l-NoPUhqL._AC_UY900_.jpg",
    },
    {
        id: 7,
        itemName: "Tropical Shorts",
        itemDescription: "Lightweight and breathable shorts for those hot summer days.",
        itemImage: "https://i.etsystatic.com/18628324/r/il/3f1f4a/4783154741/il_570xN.4783154741_foh8.jpg",
    },
];

// GET items listing.
router.get("/", function (req, res, next) {
    res.json(items);
});

module.exports = router;
