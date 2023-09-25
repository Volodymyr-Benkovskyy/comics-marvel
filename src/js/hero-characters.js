const swiperSlideHero = new Swiper('.section-hero-swiper', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 50,
  slidesPerView: 1,

  initialSlide: 0,
  breakpoints: {
    320: {
      direction: 'vertical',
    },
    768: {
      direction: 'horizontal',
    },
    1440: {
      direction: 'vertical',
    },
  },
});

const swiperaPagination = document.querySelector('.swiper-pagination');
const btnColor = document.querySelector('.js-btn-color');

const onSwiper = event => {
  const { target: bullet } = event;
  const ariaLabel = bullet.getAttribute('aria-label');
  let color = '';

  if (ariaLabel === 'Go to slide 1') {
    color = '#600404';
    btnColor.style.background = color;
  } else if (ariaLabel === 'Go to slide 2') {
    color = '#34387f';
    btnColor.style.background = color;
  } else if (ariaLabel === 'Go to slide 3') {
    color = '#5b7f3c';
    btnColor.style.background = color;
  }
};

swiperaPagination.addEventListener('click', onSwiper);
/* swiperSlideHero */
