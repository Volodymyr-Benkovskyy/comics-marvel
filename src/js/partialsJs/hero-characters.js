let swiperSlideHero = null;

// Функція для ініціалізації Swiper
function initSwiper() {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
  const isDesktop = window.innerWidth >= 1440;

  let direction = 'vertical'; // За замовчуванням вертикальний

  if (isMobile) {
    direction = 'vertical'; // На мобільних - вертикальний
  } else if (isTablet) {
    direction = 'horizontal'; // На планшетах - горизонтальний
  } else if (isDesktop) {
    direction = 'vertical'; // На десктопах - вертикальний
  }

  // Ініціалізація Swiper
  swiperSlideHero ? swiperSlideHero.destroy() : null;

  swiperSlideHero = new Swiper('.section-hero-swiper', {
    direction: direction,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 50,
    slidesPerView: 1,
    initialSlide: 0,
    // allowTouchMove: false,
    // Забороняємо прокрутку слайдера по екрану на мобільних пристроях
  });
}

initSwiper();

window.addEventListener('resize', initSwiper);

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
