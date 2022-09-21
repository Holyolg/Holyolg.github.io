/*
const btn = document.querySelector(".open-btn");
const nav = document.querySelector(".header__nav-row");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  nav.classList.toggle("menu-open");
  body.classList.toggle("lock");
});
*/
document;
/*Для блюра*/
function menuOpen() {
  /*переключатель  меню*/
  document.getElementById("myDropdown").classList.toggle("menu-open");
  /*Запрет скролла*/
  document.querySelector("body").classList.toggle("lock");
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
