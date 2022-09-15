// Прокрутка при клике
const button = document.querySelector(".header__item-text");
const form = document.querySelector(".whats-new");

// При клике на кнопку
button.addEventListener("click", (e) => {
  // Прокрутим страницу к форме
  form.scrollIntoView({
    block: "nearest", // к ближайшей границе экрана
    behavior: "smooth", // и плавно
  });
  e.preventDefault();
});
