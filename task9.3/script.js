const closeBtn = document.querySelector(".close-aside");
const openBtn = document.querySelector(".open-aside");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
console.log(closeBtn);
openBtn.addEventListener("click", () => {
  aside.style.width = "250px";
  main.style.marginLeft = "250px";
  openBtn.classList.add("none");
});
closeBtn.addEventListener("click", () => {
  aside.style.width = "0";
  main.style.marginLeft = "0";
  openBtn.classList.remove("none");
});
