// JavaScript可以用于处理页面交互
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
});


// JavaScript用于实现视差效果
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset; // 获取页面滚动的距离
    const background = document.querySelector('.background'); // 选择背景元素
    
    // 调整背景图的Y轴位置，使其随着页面滚动产生移动
    background.style.backgroundPositionY = -(scrolled * 0.5) + 'px'; 
});


document.addEventListener('DOMContentLoaded', function() {
    const rooms = document.querySelector('.rooms');
    const roomItems = document.querySelectorAll('.room-item');
    
    if (roomItems.length > 1) {
        const containerWidth = rooms.offsetWidth; // 获取容器宽度
        const totalItemWidth = Array.from(roomItems).reduce((total, item) => {
            return total + item.offsetWidth;
        }, 0);
        
        // 计算图片之间的总空隙
        const totalGapWidth = containerWidth - totalItemWidth;
        const gapSize = totalGapWidth / (roomItems.length + 1); // 包括两边空隙

        // 设置左右的 padding，使其与 gapSize 一致
        rooms.style.paddingLeft = `${gapSize}px`;
        rooms.style.paddingRight = `${gapSize}px`;

        // 调整每个图片之间的间隙
        roomItems.forEach((item, index) => {
            if (index < roomItems.length - 1) {
                item.style.marginRight = `${gapSize}px`;
            }
        });
    }
});


// Scroll Animation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll(".box");

    const checkBoxes = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("show");
            } else {
                box.classList.remove("show");
            }
        });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // 初始化检查
});

// Scroll-triggered Navigation Menu
const nav = document.querySelector(".nav");

const fixNav = () => {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
};

window.addEventListener("scroll", fixNav);

// Section 3 房间滑动控制
const roomSlides = document.querySelectorAll(".room-slide");
const roomNextButton = document.getElementById("room-next");
const roomPrevButton = document.getElementById("room-prev");
const autoRoom = true; // 自动播放
const intervalRoomTime = 5000; // 5秒切换
let roomSlideInterval;

const nextRoomSlide = () => {
  const current = document.querySelector(".room-slide.current");
  current.classList.remove("current");

    if (current.nextElementSibling && current.nextElementSibling.classList.contains("room-slide")) {
      current.nextElementSibling.classList.add("current");
    } else {
      roomSlides[0].classList.add("current");
    }
  }; // 加入适当延迟，避免空白过渡

const prevRoomSlide = () => {
  const current = document.querySelector(".room-slide.current");
  current.classList.remove("current");
    if (current.previousElementSibling && current.previousElementSibling.classList.contains("room-slide")) {
      current.previousElementSibling.classList.add("current");
    } else {
      roomSlides[roomSlides.length - 1].classList.add("current");
    }
  }; 

// 下一张按钮事件
roomNextButton.addEventListener("click", () => {
  nextRoomSlide();
  if (autoRoom) {
    clearInterval(roomSlideInterval);
    roomSlideInterval = setInterval(nextRoomSlide, intervalRoomTime);
  }
});

// 上一张按钮事件
roomPrevButton.addEventListener("click", () => {
  prevRoomSlide();
  if (autoRoom) {
    clearInterval(roomSlideInterval);
    roomSlideInterval = setInterval(nextRoomSlide, intervalRoomTime);
  }
});

// 自动播放
if (autoRoom) {
  roomSlideInterval = setInterval(nextRoomSlide, intervalRoomTime);
}

// section 5
const slides = document.querySelectorAll(".slide");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const auto = true; // 自动播放
const intervalTime = 5000; // 5秒切换
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".slide.current");
  current.classList.remove("current");

  // 如果有下一个幻灯片，添加 "current" 类，否则重置到第一个
  if (current.nextElementSibling && current.nextElementSibling.classList.contains("slide")) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current"); // 确保切换到第一张幻灯片
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  // 如果有前一个幻灯片，添加 "current" 类，否则重置到最后一个
  if (current.previousElementSibling && current.previousElementSibling.classList.contains("slide")) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current"); // 确保切换到最后一张幻灯片
  }
};

// 下一张按钮事件
nextButton.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// 上一张按钮事件
prevButton.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// 自动播放
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}