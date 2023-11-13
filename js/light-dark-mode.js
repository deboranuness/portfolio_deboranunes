function toggleTheme() {
    var icon = document.getElementById("theme-button");

    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.innerHTML = '<i class="fas fa-sun theme-icon"></i>';
    } else {
        icon.innerHTML = '<i class="fas fa-moon theme-icon"></i>';
    }
}