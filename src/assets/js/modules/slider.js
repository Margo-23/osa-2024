import Swiper from 'swiper';
import {
    Navigation,
    Pagination,
    Thumbs
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

new Swiper('#tell-slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        prevEl: '.tell-prev',
        nextEl: '.tell-next',
    },
    pagination: {
        el: '.tell-pag',
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

const swiper = new Swiper(".slider-dbl-thumb", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
});
const swiper2 = new Swiper(".slider-dbl-main", {
    modules: [Navigation, Pagination, Thumbs],
    spaceBetween: 10,
    pagination: {
        el: '.slider-dbl-pag',
        clickable: true,
    },
    thumbs: {
        swiper: swiper,
    },
});


new Swiper('.influence-slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: '.influence-slider-pag',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: "auto",
        },
    },
});

new Swiper('.business-slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: '.business-slider-pag',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: "auto",
        },
    },
});

new Swiper('#pay-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    initialSlide: 8,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 8,
        },
    },
});