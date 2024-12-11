const { MongoClient } = require("mongodb");

const mongoURL = "mongodb://localhost:27017";
const dbName = "styleSwipeDB";

const items = [
    {
        itemName: "Stylish Jacket",
        itemDescription: "A modern, sleek jacket perfect for cool evenings.",
        itemImage: "https://via.placeholder.com/300"
    },
    {
        itemName: "Casual T-Shirt",
        itemDescription: "A comfortable t-shirt for everyday wear.",
        itemImage: "https://via.placeholder.com/300"
    },
    {
        itemName: "Elegant Dress",
        itemDescription: "A sophisticated dress for formal occasions.",
        itemImage: "https://via.placeholder.com/300"
    },
    {
        itemName: "Classic Hoodie",
        itemDescription: "Stay cozy with this stylish and warm hoodie.",
        itemImage: "https://via.placeholder.com/300"
    },
    {
        itemName: "Denim Jeans",
        itemDescription: "Classic, durable denim jeans for everyday use.",
        itemImage: "https://via.placeholder.com/300"
    },
    {
        itemName: "Summer Sandals",
        itemDescription: "Comfortable sandals for sunny summer days.",
        itemImage: "https://via.placeholder.com/300"
    }
];

const setupDatabase = async () => {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    try {
        console.log("Connecting to MongoDB...");
        await client.connect();

        const db = client.db(dbName);
        const itemsCollection = db.collection("items");
        const likesCollection = db.collection("likes");

        console.log("Setting up the database...");

        // Clear existing data
        await itemsCollection.deleteMany({});
        await likesCollection.deleteMany({});

        // Populate items collection
        await itemsCollection.insertMany(items);

        // Ensure likes collection exists
        await likesCollection.insertOne({ dummy: true });
        await likesCollection.deleteOne({ dummy: true });

        console.log("Database setup complete!");
    } catch (error) {
        console.error("Error setting up the database:", error);
    } finally {
        await client.close();
        console.log("Disconnected from MongoDB.");
    }
};

setupDatabase();