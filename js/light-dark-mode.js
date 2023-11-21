function toggleTheme() {
    var body =document.body;
    var icon = document.getElementById("theme-button");
    var popup = document.getElementById("emoji-popup");

    body.classList.add("light-theme");
    icon.innerHTML = '<i class="fas fa-sun theme-icon"></i>';
    showPopup(popup);

    setTimeout(function() {
        hidePopup(popup);
        icon.innerHTML = '<i class="fas fa-moon theme-icon"></i>';
        body.classList.remove("light-theme");
    }, 1500);
}

function showPopup(popup) {
    popup.style.display = "block";
}

function hidePopup(popup) {
    popup.style.display = "none";
}