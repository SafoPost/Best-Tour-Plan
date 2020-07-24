var mySwiper = new Swiper('.hotel-grid__swiper-container', {
  // Optional parameters
  loop: true,
  speed: 800,
  effect: 'fade',

  navigation: {
    nextEl: '.hotel-grid__swiper-button--next',
    prevEl: '.hotel-grid__swiper-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})