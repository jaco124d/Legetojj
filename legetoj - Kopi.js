const hamburger = document.querySelector("#burger");
const navUL = document.querySelector("#nav-ul");
const bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

navUL.addEventListener("click", () => {
  navUL.classList.remove("show");
});
