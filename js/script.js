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