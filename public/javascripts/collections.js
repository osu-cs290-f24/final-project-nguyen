document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("liked-items-container");

    try {
        // Fetch liked items from the backend
        const response = await fetch("/liked-items");
        const likedItems = await response.json();

        // If no items are liked, show a message
        if (likedItems.length === 0) {
            container.innerHTML = "<p>You have not liked any items yet.</p>";
            return;
        }

        // Render each liked item
        likedItems.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("liked-item");

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            `;

            container.appendChild(itemElement);
        });
    } catch (error) {
        console.error("Error loading liked items:", error);
        container.innerHTML =
            "<p>Failed to load liked items. Please try again later.</p>";
    }
});
