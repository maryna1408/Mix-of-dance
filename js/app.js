const classesSlider = new Swiper('.classes-slider', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
      delay: 5000,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  speed: 700,
})