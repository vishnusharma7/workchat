const menu = document.querySelector(".menu-sidebar");
const sideBar = document.querySelector(".sidebar");
let isMenuOpen = false;

menu.addEventListener("click", () => {
    if (isMenuOpen) {
        sideBar.style.marginLeft = "-100%";

        isMenuOpen = false;
    } else {
        sideBar.style.marginLeft = "0";

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
