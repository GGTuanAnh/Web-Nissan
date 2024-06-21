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