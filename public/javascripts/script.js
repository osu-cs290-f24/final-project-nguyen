document.addEventListener("DOMContentLoaded", () => {
    // Array to store liked items
    const likedItems = [];
    const likeButton = document.querySelector(".heart-btn");

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
        const isLiked = likedItems.some((item) => item.name === likedItem.name);
        if (!isLiked) {
            // Add item to likedItems array
            likedItems.push(likedItem);
        }
    });
});
