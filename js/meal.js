const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};


const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container2");
const body = document.body;  // 选择 body 元素

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  body.classList.add("show-nav"); // 禁止滚动
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  body.classList.remove("show-nav"); // 允许滚动
});