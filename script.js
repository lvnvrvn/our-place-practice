const mobileMenu = document.querySelector(".mobile__menu");
const mobileMenuIcon = document.querySelectorAll(".mobile__menu__icon");
const mobileMenuList = document.querySelector(".mobile__menu__list");

mobileMenu.addEventListener("click", function () {
  mobileMenuIcon[0].classList.toggle("active");
  mobileMenuIcon[1].classList.toggle("active");
  mobileMenuList.classList.toggle("active");
});
