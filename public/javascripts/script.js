document.addEventListener("DOMContentLoaded", async () => {
    // Define array to store liked items
    const mainPage = document.getElementById("main-page");
    let items = [];
    let currentIdx = parseInt(localStorage.getItem("currentIdx"), 10) || 0;

    // Save the current index to localStorage
    const saveCurrentIndex = () => {
        localStorage.setItem("currentIdx", currentIdx);
    };

    // Fetch items from the server
    const fetchItems = async () => {
        try {
            const response = await fetch("/items");
            items = await response.json();
        } catch (error) {
            mainPage.innerHTML =
                "<p>Failed to load items. Please try again later.</p>";
        }
    };

    // Fetch liked items from the database
    const fetchLikedItems = async () => {
        try {
            const response = await fetch("/liked-items");
            if (response.ok) {
                return await response.json();
            } else {
                console.error("Failed to fetch liked items from database");
                return [];
            }
        } catch (error) {
            console.error("Error fetching liked items:", error);
            return [];
        }
    };

    // Function to remove an item from the database
    const removeItem = async (item) => {
        try {
            const response = await fetch("/liked-items", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: item.itemName,
                    description: item.itemDescription,
                    image: item.itemImage,
                }),
            });

            if (response.ok) {
                console.log("Liked item removed from database");
            } else {
                console.error("Failed to remove liked item from database");
            }
        } catch (error) {
            console.error("Error removing liked item from database:", error);
        }
    };

    // Function to add an item to the database
    const addItem = async (item) => {
        try {
            const response = await fetch("/liked-items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: item.itemName,
                    description: item.itemDescription,
                    image: item.itemImage,
                }),
            });

            if (response.ok) {
                console.log("Liked item added to database");
            } else {
                console.error("Failed to add liked item to database");
            }
        } catch (error) {
            console.error("Error adding liked item to database:", error);
        }
    };

    // Function to display the current item
    const displayItem = () => {
        // Clear main page
        mainPage.textContent = "";

        // Display error message if no more items to show
        if (currentIdx >= items.length) {
            mainPage.innerHTML = "<p>No more items to show.</p>";
            return;
        }

        // Display item at current index
        const item = items[currentIdx];
        const itemCard = document.createElement("div");
        itemCard.classList.add("item-card");

        // Set item image
        const itemImage = document.createElement("img");
        itemImage.src = item.itemImage;
        itemImage.id = "item-image";

        // Set item details
        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");
        const itemName = document.createElement("h2");
        itemName.id = "item-name";
        itemName.textContent = item.itemName;
        const itemDescription = document.createElement("p");
        itemDescription.id = "item-description";
        itemDescription.textContent = item.itemDescription;
        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemDescription);

        // Create button div
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        // Create the like button
        const likeButton = document.createElement("button");
        likeButton.classList.add("heart-btn");
        const likeIcon = document.createElement("span");
        likeIcon.textContent = "\u2665";
        likeButton.appendChild(likeIcon);
        const LikeText = document.createTextNode(" Like");
        likeButton.appendChild(LikeText);

        // Create the dislike button
        const dislikeButton = document.createElement("button");
        dislikeButton.classList.add("cross-btn");
        const dislikeIcon = document.createElement("span");
        dislikeIcon.textContent = "\u2715";
        dislikeButton.appendChild(dislikeIcon);
        const dislikeText = document.createTextNode(" Dislike");
        dislikeButton.appendChild(dislikeText);

        // Create the redo button
        const redoButton = document.createElement("button");
        redoButton.classList.add("redo-btn");
        const redoIcon = document.createElement("span");
        redoIcon.textContent = "\u21BA";
        redoButton.appendChild(redoIcon);
        const redoText = document.createTextNode(" Redo");
        redoButton.appendChild(redoText);

        // Assemble buttons div
        buttonsDiv.appendChild(likeButton);
        buttonsDiv.appendChild(dislikeButton);
        buttonsDiv.appendChild(redoButton);

        // Assemble item card
        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemDetails);
        itemCard.appendChild(buttonsDiv);

        // Append the item card to the main page
        mainPage.appendChild(itemCard);

        // Add event listeners for like and dislike buttons
        likeButton.addEventListener("click", () => handleAction(item, "like"));
        dislikeButton.addEventListener("click", () =>
            handleAction(item, "dislike")
        );

        // Event listener for the redo button
        redoButton.addEventListener("click", () => {
            // Go back one index (only if not already at the first index)
            if (currentIdx > 0) {
                currentIdx--;
                saveCurrentIndex();
                handleAction(items[currentIdx], "redo");
                displayItem();
            } else {
                alert("No previous items to redo.");
            }
        });
    };

    // Function to handle like or dislike actions
    const handleAction = async (item, action) => {
        const likedItemsFromDb = await fetchLikedItems();

        // Check if the item is already liked
        const itemExists = likedItemsFromDb.some(
            (likedItem) =>
                likedItem.name === item.itemName &&
                likedItem.description === item.itemDescription &&
                likedItem.image === item.itemImage
        );

        // Add item to likedItems array if not already liked
        if (action === "like" && !itemExists) {
            addItem(item);
        } else if (
            (action === "dislike" && itemExists) ||
            (action === "redo" && itemExists)
        ) {
            removeItem(item);
        }

        // Refresh item
        if (action !== "redo") {
            currentIdx++;
        }
        saveCurrentIndex();
        displayItem();
    };

    // Initally fetch items and display the first item
    await fetchItems();
    displayItem();
});
