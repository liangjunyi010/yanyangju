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

// 定义滚动到顶部的函数
const scrollToTop = (callback) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // 平滑滚动到顶部
  });

  // 等待滚动完成后再执行旋转动画
  setTimeout(callback, 200); // 500ms是滚动的时间，视具体情况可以调整
};

open.addEventListener("click", () => {
  scrollToTop(() => {
    container.classList.add("show-nav");
    body.classList.add("show-nav"); // 禁止滚动
  });
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  body.classList.remove("show-nav"); // 允许滚动
});