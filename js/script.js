$(".autoplay").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000


});
document.addEventListener('DOMContentLoaded', function() {
    var tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');
            var content = document.getElementById(tabId);

            // Удаляем активный класс у текущих вкладок и контента
            document.querySelector('.tab-item.active').classList.remove('active');
            document.querySelector('.tab-pane.active').classList.remove('active');

            // Добавляем активный класс для выбранной вкладки и контента
            this.classList.add('active');
            content.classList.add('active');
        });
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
        menuItem = document.querySelectorAll('.menu_li'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})



let
horizontScroll = document.querySelector('.container1');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

rightBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft += 900;
});
leftBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft -= 900;
});


const btn = document.querySelector('.btn2');
const block__teachers = document.querySelectorAll('.block__teacher')

btn.addEventListener('click', function () {

    for(let block__teacher of block__teachers) {
        block__teacher.style.display = 'flex'
    }
    btn.style.display = 'none';
});

const btn3 = document.querySelector('.btn3');
const cards = document.querySelectorAll('.reviews__ya')

btn3.addEventListener('click', function () {

    for(let reviews__ya of cards) {
        reviews__ya.style.display = 'flex'
    }
    btn.style.display = 'none';
});

function openModal() {
    document.getElementById('myModal').style.display = "block";
}


function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
