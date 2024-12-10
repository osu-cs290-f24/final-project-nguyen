document.addEventListener("DOMContentLoaded", async () => {
    // Define array to store liked items
    const likedItems = [];
    const mainPage = document.getElementById("main-page");
    let currentIdx = 0;
    let items = [];

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
    };

    // Function to handle like or dislike actions
    const handleAction = (item, action) => {
        // Check if the item is already in likedItems
        const itemIndex = likedItems.findIndex(
            (likedItems) =>
                likedItems.itemName === item.itemName &&
                likedItems.itemDescription === item.itemDescription &&
                likedItems.itemImage === item.itemImage
        );

        // Add item to likedItems array if not already liked
        if (action === "like" && itemIndex === -1) {
            likedItems.push({
                itemName: item.itemName,
                itemDescription: item.itemDescription,
                itemImage: item.itemImage,
            });
        } else if (action === "dislike" && itemIndex !== -1) {
            // Remove item from likedItems array if it exists
            likedItems.splice(itemIndex, 1);
        }

        // Refresh item
        currentIdx++;
        displayItem();
    };

    // Initally fetch items and display the first item
    await fetchItems();
    displayItem();
});
