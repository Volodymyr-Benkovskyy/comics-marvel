import { api } from './apiMarvel.js';
import { onModalComicsClick } from './modal-comics.js';
const lastComicsList = document.querySelector('.js-last-comics-list');
const createLastComics = array => {
  const data = array
    .map(({ id, thumbnail, title, creators }) => {
      return `  <li class= "last-comics-item swiper-slide" data-id="${id}" width="auto">
     <picture>
      <source media="(min-width: 1440px)"
                  srcset="${thumbnail.path}.${thumbnail.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${thumbnail.path}.${thumbnail.extension}"/> 
      <img class="last-comics-img slide-comics-img" data-id="${id}"
        src='${thumbnail.path}.${thumbnail.extension}'
        alt='${title}'
      />
     </picture>
      <h3 class="last-comics-title" data-id="${id}">${title}</h3>
      <p class= "last-comics-creator" data-id="${id}">${creators.items[0].name}</p>
    </li>`;
    })
    .join('');
  return data;
};

const jsModalLastComics = document.querySelector(
  '.js-click-delegate-last-comics'
);

jsModalLastComics.addEventListener('click', event => {
  const target = event.target; // Елемент, на який було клікнуто

  // Перевіряємо, чи клікнуто на певному дитячому елементі
  if (target.matches('.last-comics-img')) {
    const id = target.dataset.id;
    const clickEventComics = { target }; // Передаємо об'єкт події та id
    onModalComicsClick(clickEventComics, id);
  }
});

const renderLastComics = data => {
  lastComicsList.insertAdjacentHTML('beforeend', createLastComics(data));
};

const getRandomComics = async () => {
  try {
    const response = await api.getComics({
      limit: 3,
      dateDescriptor: 'lastWeek',
    });

    // Перевірка HTTPS для зображень у відповіді
    response.results.forEach(comic => {
      if (!comic.thumbnail.path.startsWith('https://')) {
        comic.thumbnail.path = comic.thumbnail.path.replace(
          'http://',
          'https://'
        );
      }
    });

    renderLastComics(response.results);
  } catch (error) {
    //location.replace('./error.html');
    console.log(error.message);
  }
};

getRandomComics();

const slideSwiperComics = new Swiper('.section-comics-swiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },

    1440: {
      slidesPerView: 3,
      init: false,
    },
  },
});
