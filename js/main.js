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
    onlyInViewport: true,
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
  speed: 600,

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

$('.parallax-window').parallax({
  imageSrc: 'img/newsletter-bg.jpg',
  speed: 0.5
});

var menuBtn = document.querySelector('.menu-button');
var navbarBottom = document.querySelector('.navbar-bottom');
var menuBtnLineUp = document.querySelector('.menu-button__line--up');
var menuBtnLineHidden = document.querySelector('.menu-button__line--hidden');
var menuBtnLineDown = document.querySelector('.menu-button__line--down');

menuBtn.addEventListener('click', function () {
  console.log('1230');
  navbarBottom.classList.toggle('navbar-bottom--visible');
  if (navbarBottom.classList.contains('navbar-bottom--visible')) {
    menuBtnLineUp.style = 'width: 8px; height: 8px; background-color: transparent; border-right: 1px solid #333333; border-bottom: 1px solid #333333; transform: rotate(45deg);';
    menuBtnLineHidden.style = 'display: none'
    menuBtnLineDown.style = 'width: 8px; height: 8px; background-color: transparent; border-left: 1px solid #333333; border-top: 1px solid #333333; transform: rotate(45deg);';
    menuBtn.style = 'min-height: 18px; padding-left: 4px;';
  } else {
    menuBtnLineUp.style = 'none';
    menuBtnLineHidden.style = 'none'
    menuBtnLineDown.style = 'none';
    menuBtn.style = 'none';

  }
});