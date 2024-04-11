const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const query = searchInput.value.trim();
        if (query.toLowerCase() === "google search") {
            window.location.href = "index.html";
        } else {
            alert("Search Query: " + query);
        }
    }
});

function searchGoogle() {
    const query = document.getElementById('search-query').value;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = url;
}





