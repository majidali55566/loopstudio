const navBarContainer = document.querySelector(".nav-bar");
const humburger = document.querySelector("#humburger");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.querySelector("#close-menu");

humburger.addEventListener("click", () => {
  navLinks.classList.remove("display-none");
  closeMenu.classList.remove("display-none");
  humburger.classList.toggle("display-none");
  navBarContainer.classList.toggle("nav-bar-styles");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.toggle("display-none");
  closeMenu.classList.toggle("display-none");
  humburger.classList.toggle("display-none");
  navBarContainer.classList.remove("nav-bar-styles");
});
