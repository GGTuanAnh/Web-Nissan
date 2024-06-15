window.addEventListener('scroll', function () {
    var toTopElement = document.querySelector('.totop');

    if (window.scrollY > 100) {
        toTopElement.style.bottom = '59px'; 
        toTopElement.style.opacity = '1'; 
        toTopElement.style.visibility = 'visible'; 
    } else {
        toTopElement.style.bottom = '-100px';
        toTopElement.style.opacity = '0';
        setTimeout(function () {
            toTopElement.style.visibility = 'hidden';
        }, 500); 
    }
});
let isHoveringOverIcon = false;
let isHoveringOverTitles = false;

document.querySelector('.list-icons img').addEventListener('mouseenter', function () {
    isHoveringOverIcon = true;
    document.querySelector('.list-titles').style.display = 'flex';
});

document.querySelector('.list-icons img').addEventListener('mouseleave', function () {
    isHoveringOverIcon = false;
    setTimeout(function () {
        if (!isHoveringOverTitles) {
            document.querySelector('.list-titles').style.display = 'none';
        }
    }, 100); 
});

document.querySelector('.list-titles').addEventListener('mouseenter', function () {
    isHoveringOverTitles = true;
    document.querySelector('.list-titles').style.display = 'flex';
});
document.querySelector('.list-titles').addEventListener('mouseleave', function () {
    isHoveringOverTitles = false;
    setTimeout(function () {
        if (!isHoveringOverIcon) {
            document.querySelector('.list-titles').style.display = 'none';
        }
    }, 100); 
});
