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
    {
        id: 8,
        itemName: "Winter Boots",
        itemDescription: "Keep yourself warm and stylish with these waterproof winter boots.",
        itemImage: "https://northsideusa.com/cdn/shop/files/womens-waterproof-snow-boots.jpg?v=1696966313&width=3000",
    },
    {
        id: 9,
        itemName: "Chancla",
        itemDescription: "Just your average flip flop, but a weapon in a mother's hands.",
        itemImage: "https://www.westmarine.com/dw/image/v2/BGFG_PRD/on/demandware.static/-/Sites-wm-master-catalog/default/dw1bf40470/images/orig/P018031419S_DARK_BROWN_1500.jpg?sw=576&sh=576",
    },
    {
        id: 10,
        itemName: "Dress Shirt",
        itemDescription: "A formal button-up shirt for all professional or elegant occasions.",
        itemImage: "https://m.media-amazon.com/images/I/51S6B9bmD3L._AC_UY1000_.jpg",
    },
    {
        id: 11,
        itemName: "Stylish Belt",
        itemDescription: "A belt for special high-class occasions or you just have that much money.",
        itemImage: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1658770219/406831_0YA0G_1000_001_100_0000_Light.jpg",
    },
    {
        id: 12,
        itemName: "Glass Slipper",
        itemDescription: "A beautiful slipper made from a magical glass-like material (Only the left one; don't ask)",
        itemImage: "https://www.steveshallmark.com/cdn/shop/files/CinderellaGlassSlipper3DLight_1500x.png?v=1714157255",
    },
    {
        id: 13,
        itemName: "High-End Smartwatch",
        itemDescription: "A smartwatch wanted by all; Only one of its kind.",
        itemImage: "https://images.shoutwiki.com/omnipedia/thumb/2/2b/Af_trix.png/200px-Af_trix.png",
    },
    {
        id: 14,
        itemName: "Classic Sneakers",
        itemDescription: "A nice pair of retro-style sneakers for casual wear.",
        itemImage: "https://media.finishline.com/i/finishline/DQ8426_106_P2?$default$&w=670&h=670&bg=rgb(237,237,237)",
    },
    {
        id: 15,
        itemName: "Comfy Sweatpants",
        itemDescription: "A comfortable and soft pair of pants perfect for everyday wear.",
        itemImage: "https://cdn11.bigcommerce.com/s-jjm7kgkrrc/images/stencil/1280x1280/products/50840/6661860/20321__63418.1704354851.jpg?c=1",
    },
];

// GET items listing.
router.get("/", function (req, res, next) {
    res.json(items);
});

module.exports = router;
