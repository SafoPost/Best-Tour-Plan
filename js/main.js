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
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [41.388682, 2.131476],
    zoom: 15
  });

  myMap.geoObjects.add(new ymaps.Placemark([41.388682, 2.131476], {
    balloonContent: 'Grand Hilton Hotel'
  }, {
    preset: 'islands#dotIcon',
    iconColor: '#ec1f46'
  }));
};

var mySwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  speed: 800,
  // effect: 'fade',

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

$('.parallax-window').parallax({
  imageSrc: 'img/newsletter-bg.jpg',
  speed: 0.5
});