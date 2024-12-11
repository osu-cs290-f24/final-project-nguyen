document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("liked-items-container");

    try {
        // Fetch liked items from the backend
        const response = await fetch("/liked-items");
        const likedItems = await response.json();

        // If no items are liked, show a message
        if (likedItems.length === 0) {
            container.textContent = "You have not liked any items yet.";
            container.classList.add("empty");
            return;
        }

        // Render each liked item
        likedItems.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("liked-item");

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;

            const h2 = document.createElement("h2");
            h2.textContent = item.name;

            const p = document.createElement("p");
            p.textContent = item.description;

            itemElement.appendChild(img);
            itemElement.appendChild(h2);
            itemElement.appendChild(p);

            container.appendChild(itemElement);
        });
    } catch (error) {
        console.error("Error loading liked items:", error);
        container.innerHTML =
            "<p>Failed to load liked items. Please try again later.</p>";
    }
});
