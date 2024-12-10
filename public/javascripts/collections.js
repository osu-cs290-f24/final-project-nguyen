document.addEventListener("DOMContentLoaded", () => {
    // Load liked items
    const container = document.getElementById("liked-items-container");

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
});
