let menu = document.getElementById("myDropdown");
let bdy = document.querySelector("body");
/*Меню-бургер*/
function menuOpen() {
  menu.classList.toggle("menu-open");
  bdy.classList.toggle("lock");
}

/*Закрытие при выборе*/
window.onclick = function (e) {
  if (!e.target.matches(".open-btn")) {
    if (menu.classList.contains("menu-open")) {
      menu.classList.remove("menu-open");
      bdy.classList.remove("lock");
    }
  }
};
