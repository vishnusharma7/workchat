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
function handleViewportChange() {
    if (window.innerWidth > 768) {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

window.addEventListener("resize", handleViewportChange);
window.addEventListener("DOMContentLoaded", handleViewportChange);
