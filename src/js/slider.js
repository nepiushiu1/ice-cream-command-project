new Swiper('.reviews__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    touchRatio: 1,
    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    loop: true,

    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
    
    breakpoints: {
        320: {
            spaceBetween: 40,
            speed: 900
        },

        768: {
            spaceBetween: 60,
            speed: 1000
        },

        1200: {
            spaceBetween: 100,
            speed: 1400
        },
  }
});