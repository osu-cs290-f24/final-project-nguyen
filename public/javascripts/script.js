document.addEventListener("DOMContentLoaded", () => {
    // Array to store liked items
    const likedItems = [];
    const likeButton = document.querySelector(".heart-btn");
    const dislikeButton = document.querySelector(".cross-btn");

    // Add event listener to like button
    likeButton.addEventListener("click", () => {
        // Get item card
        const itemCard = likeButton.closest(".item-card");

        // Get item details
        const itemName = itemCard.querySelector("#item-name").textContent;
        const itemDescription =
            itemCard.querySelector("#item-description").textContent;
        const itemImage = itemCard.querySelector("#item-image").src;

        // Create an item object
        const likedItem = {
            name: itemName,
            description: itemDescription,
            image: itemImage,
        };

        // Only add item if it is not already liked
        const isLiked = likedItems.some(
            (item) =>
                item.name === itemName &&
                item.description === itemDescription &&
                item.image === itemImage
        );
        if (!isLiked) {
            // Add item to likedItems array
            likedItems.push(likedItem);
        }
    });

    // Add event listener to dislike button
    dislikeButton.addEventListener("click", () => {
        // Get item card
        const itemCard = dislikeButton.closest(".item-card");

        // Get item details
        const itemName = itemCard.querySelector("#item-name").textContent;
        const itemDescription =
            itemCard.querySelector("#item-description").textContent;
        const itemImage = itemCard.querySelector("#item-image").src;

        // Remove item from likedItems array
        const itemIndex = likedItems.findIndex(
            (item) =>
                item.name === itemName &&
                item.description === itemDescription &&
                item.image === itemImage
        );
        likedItems.splice(itemIndex, 1);
    });
});
