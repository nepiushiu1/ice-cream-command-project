new Swiper('.reviews__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    touchRatio: 2,
    grabCursor: true,
    spaceBetween: 20,

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

    speed: 700,

    effect: 'coverflow',
    coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

});