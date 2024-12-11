const mongoose = require("mongoose");

const likedItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    image: String,
});

module.exports = mongoose.model("LikedItem", likedItemSchema);
