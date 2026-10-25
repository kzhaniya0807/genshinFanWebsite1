const searchInput = document.getElementById("characterSearch");
const cards = document.querySelectorAll(".char-card");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function() {

    let searchText = searchInput.value.trim().toLowerCase();
    let count = 0;

    cards.forEach(function(card) {

        let name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(searchText)) {
            card.style.display = "";
            count++;
        } else {
            card.style.display = "none";
        }

    });

    resultCount.textContent = count + " characters found";

    if (count === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});