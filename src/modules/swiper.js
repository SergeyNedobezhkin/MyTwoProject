import Swiper, { Navigation, Pagination } from 'swiper';
const swiperButtonPrev = document.querySelector('.swiper-button-prev');
const swiperButtonNext = document.querySelector('.swiper-button-next');

const swiperFunc = () => {
    swiperButtonPrev.style = 'top: 60px';
    swiperButtonNext.style = 'top: 60px';
    const swiper = new Swiper('.companies-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

    });
};
export { swiperFunc };