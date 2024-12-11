const express = require("express");
const router = express.Router();
const LikedItem = require("../models/LikedItem");

// POST route to add a liked item
router.post("/", async (req, res) => {
    const { name, description, image } = req.body;

    try {
        const likedItem = new LikedItem({ name, description, image });
        await likedItem.save();
        res.status(201).json({ message: "Liked item added to database" });
    } catch (error) {
        console.error("Error saving liked item:", error);
        res.status(500).json({ message: "Error saving liked item" });
    }
});

// DELETE route to remove a liked item
router.delete("/", async (req, res) => {
    const { name, description, image } = req.body;

    try {
        const result = await LikedItem.deleteOne({ name, description, image });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        console.error("Error removing liked item:", error);
        res.status(500).json({ message: "Error removing liked item" });
    }
});

// GET route to fetch all liked items
router.get("/", async (req, res) => {
    try {
        const likedItems = await LikedItem.find();
        res.status(200).json(likedItems);
    } catch (error) {
        console.error("Error fetching liked items:", error);
        res.status(500).send("Error fetching liked items");
    }
});

module.exports = router;
