const menu = document.querySelector(".menu-sidebar");
const sideBar = document.querySelector(".sidebar");
let isMenuOpen = false;

menu.addEventListener("click", () => {
    if (isMenuOpen) {
        sideBar.style.display = "none";
        isMenuOpen = false;
    } else {
        sideBar.style.display = "block";
        isMenuOpen = true;
    }
});
window.addEventListener("resize", handleViewportChange);
window.addEventListener("DOMContentLoaded", handleViewportChange);
