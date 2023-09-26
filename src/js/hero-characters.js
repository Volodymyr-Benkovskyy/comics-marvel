/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

// Функція для ініціалізації Swiper
function initSwiper() {
  const direction =
    window.innerWidth < 768 || window.innerWidth >= 1440
      ? 'vertical'
      : 'horizontal';

  swiperSlideHero ? swiperSlideHero.destroy() : null;

  swiperSlideHero = new Swiper('.section-hero-swiper', {
    direction: direction,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 50,
    slidesPerView: 1,
    initialSlide: 0,
  });
}

initSwiper();

window.addEventListener('resize', initSwiper);
 */
/* const swiperaPagination = document.querySelector('.swiper-pagination');
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

swiperaPagination.addEventListener('click', onSwiper); */
