document.addEventListener("DOMContentLoaded", function() {
    loadContent("pages/home.html");
    const links = document.querySelectorAll("a[data-page]");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const pageToLoad = this.getAttribute("data-page");
            loadContent(pageToLoad);
        });
    });
});

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(content => {
            const contentContainer = document.getElementById("content");
            contentContainer.innerHTML = content;
        })
        .catch(error => console.error("Erro ao carregar conteúdo:", error));
}