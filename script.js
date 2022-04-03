const hamburger = document.querySelector(".hamburger");
const topbarMenu = document.querySelector(".topbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  topbarMenu.classList.toggle("active");
});
