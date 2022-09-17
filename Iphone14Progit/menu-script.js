const btn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__nav-row");

btn.addEventListener("click", function () {
  nav.classList.toggle("menu-open");
});
