const burgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector(".header-nav");
const getApp = document.querySelector(".get-app");
burgerMenu.addEventListener("click", () => {
    header.classList.toggle("active")
    getApp.classList.toggle("active")
    burgerMenu.classList.toggle("show")
});
