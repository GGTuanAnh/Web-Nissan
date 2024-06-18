document.addEventListener('DOMContentLoaded', function () {
    var toTopElement = document.querySelector('.totop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            toTopElement.style.bottom = '61px';
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

    document.querySelectorAll('.list-icons ').forEach(function (img) {
        img.addEventListener('mouseenter', function () {
            isHoveringOverIcon = true;
            document.querySelector('.list-titles').style.display = 'flex';
        });

        img.addEventListener('mouseleave', function () {
            isHoveringOverIcon = false;
            setTimeout(function () {
                if (!isHoveringOverTitles) {
                    document.querySelector('.list-titles').style.display = 'none';
                }
            }, 100);
        });
    });

    var listTitles = document.querySelector('.list-titles');
    if (listTitles) {
        listTitles.addEventListener('mouseenter', function () {
            isHoveringOverTitles = true;
            listTitles.style.display = 'flex';
        });
        listTitles.addEventListener('mouseleave', function () {
            isHoveringOverTitles = false;
            setTimeout(function () {
                if (!isHoveringOverIcon) {
                    listTitles.style.display = 'none';
                }
            }, 100);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var itemOne = document.querySelector('.item-one');
    var itemTwo = document.querySelector('.item-two');
    var itemThree = document.querySelector('.item-three');

    itemOne.addEventListener('click', function () {
        var mainProduct1 = document.querySelector('.main-product1');
        var mainProduct2 = document.querySelector('.main-product2');
        var mainProduct3 = document.querySelector('.main-product3');

        mainProduct2.style.display = 'none';
        mainProduct3.style.display = 'none';

        mainProduct1.style.display = 'flex';
    });

    itemTwo.addEventListener('click', function () {
        var mainProduct1 = document.querySelector('.main-product1');
        var mainProduct2 = document.querySelector('.main-product2');
        var mainProduct3 = document.querySelector('.main-product3');

        mainProduct1.style.display = 'none';
        mainProduct3.style.display = 'none';

        mainProduct2.style.display = 'flex';
    });
    itemThree.addEventListener('click', function () {
        var mainProduct1 = document.querySelector('.main-product1');
        var mainProduct2 = document.querySelector('.main-product2');
        var mainProduct3 = document.querySelector('.main-product3');
        mainProduct1.style.display = 'none';
        mainProduct2.style.display = 'none';

        mainProduct3.style.display = 'flex';
    });
});
