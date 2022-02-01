const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


