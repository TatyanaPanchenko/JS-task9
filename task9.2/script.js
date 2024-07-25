const closeBtn = document.querySelector(".close-menu");
const openBtn = document.querySelector(".open-menu");
const menu = document.querySelector(".menu-burger");

openBtn.addEventListener("click", () => {
  menu.style.top = "40px";
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  menu.style.top = "-1000px";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
});
