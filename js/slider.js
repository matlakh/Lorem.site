const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.slider__pagination',
    },
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        447: {
            slidesPerView: 2
        },
        710: {
            slidesPerView: 3
        }
    }
});