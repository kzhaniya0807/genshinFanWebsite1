// Task 4: Create and remove elements
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("favorite-form");
    const select = document.getElementById("favorite-select");
    const list = document.getElementById("favorite-list");
    const countDisplay = document.getElementById("favorite-count");

    function updateCount() {
        const items = list.getElementsByTagName("li");
        countDisplay.textContent = items.length;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const textValue = select.value;

        if (!textValue || textValue === "") {
            alert("Please choose a valid character from the list.");
            return;
        }

        const existingItems = list.getElementsByTagName("li");
        for (let item of existingItems) {
            if (item.firstChild.textContent.trim() === textValue) {
                alert("This character is already in your favorites!");
                return;
            }
        }

        const listItem = document.createElement("li");
        
        const spanText = document.createElement("span");
        spanText.textContent = textValue;
        listItem.appendChild(spanText);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
            listItem.remove();
            updateCount();
        });

        listItem.appendChild(removeButton);
        list.appendChild(listItem);

        select.selectedIndex = 0;
        updateCount();
    });
});