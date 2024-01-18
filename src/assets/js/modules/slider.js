import Swiper from 'swiper';
import {
    Navigation,
    Pagination,
} from 'swiper/modules';

new Swiper('#help-slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    slidesPerGroup: 2,
    spaceBetween: 24,
    navigation: {
        prevEl: '.help-prev',
        nextEl: '.help-next',
    },
    pagination: {
        el: '.help-pag',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});