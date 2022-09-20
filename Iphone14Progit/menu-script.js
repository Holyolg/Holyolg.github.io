/*
const btn = document.querySelector(".open-btn");
const nav = document.querySelector(".header__nav-row");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  nav.classList.toggle("menu-open");
  body.classList.toggle("lock");
});
*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("menu-open");
}
/*Закрытие при выборе*/
window.onclick = function (e) {
  if (!e.target.matches(".open-btn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("menu-open")) {
      myDropdown.classList.remove("menu-open");
    }
  }
};
