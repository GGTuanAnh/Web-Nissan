let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 20000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 20000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

document.querySelectorAll('.item_slide').forEach((colorItem, index) => {
    colorItem.addEventListener('click', () => {
        // Remove active class from all color items
        document.querySelectorAll('.item_slide').forEach(item => item.classList.remove('active'));
        // Add active class to clicked color item
        colorItem.classList.add('active');

        // Hide all car images
        document.querySelectorAll('.slide_colorcar .item').forEach(carItem => carItem.classList.remove('active'));
        // Show the car image corresponding to the clicked color item
        document.querySelectorAll('.slide_colorcar .item')[index].classList.add('active');

        // Update the color name
        const colorName = colorItem.getAttribute('data-color');
        document.querySelector('.name_color').textContent = colorName;
    });
});


// const listdesign = document.querySelector('.slide_design');
// const item_design = document.getElementsByClassName('item_design');
// let current = 0;
// const length = item_design.length;

// setInterval(() => {
//     // Calculate the width of an item
//     let width1 = item_design[0].offsetWidth;

//     // Check if the current item is the last one
//     if(current === length - 1) {
//         // If it is the last one, reset to the first item
//         listdesign.style.transform = `translateX(0px)`;
//         current = 0; // Reset the current index to 0
//     } else {
//         // Move to the next item
//         current++;
//         listdesign.style.transform = `translateX(${width1 * -current}px)`;
//     }
// }, 4000);
const slides = document.querySelectorAll('.item_design');
const prevBtn = document.querySelector('.design-btn img:first-child');
const nextBtn = document.querySelector('.design-btn img:last-child');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  
    // Kiểm tra vị trí hiện tại và cập nhật trạng thái của các nút điều hướng
    prevBtn.classList.toggle('disabled', currentSlide === 0);
    nextBtn.classList.toggle('disabled', currentSlide === slides.length - 1);
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      showSlide(currentSlide + 1);
    }
  });


  const thietkeLink = document.querySelector('.thietke');

  // Add a click event listener to the "Thiết kế" link
  thietkeLink.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
  
    // Scroll the page down by 1000 pixels
    window.scrollBy({
      top: 3950,
      behavior: 'smooth'
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        const clickModel = question.querySelector(".clickmodel");
        const content = question.querySelector(".content-q");
        const openIcon = question.querySelector(".open-icon");
        const closeIcon = question.querySelector(".close-icon");

        clickModel.addEventListener("click", function() {
            const isOpen = content.style.display === "block";

            if (isOpen) {
                content.style.display = "none";
                openIcon.style.display = "block";
                closeIcon.style.display = "none";
                clickModel.classList.remove("active");
            } else {
                content.style.display = "block";
                openIcon.style.display = "none";
                closeIcon.style.display = "block";
                clickModel.classList.add("active");
            }
        });
    });
})