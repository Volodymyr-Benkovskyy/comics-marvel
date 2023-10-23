import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { onModalComicsClick } from './modal-comics';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const modalClose = document.querySelector('.js-modal-section-characters');
const closeBtnEl = document.querySelector('.js-modal-close-btn');
const markupModalCharacters = document.querySelector(
  '.js-markup-modal-characters'
);
const markupModalComics = document.querySelector('.js-markup-modal-comics');
const modalContainerHidden = document.querySelector(
  '.modal-container-characters'
);

//const clickDelegate = document.querySelector('.js-click-delegate-characters');
const clickRerenderComics = document.querySelector('.js-click-delegate-comics');

const onCloseBtnElClick = () => {
  markupModalCharacters.innerHTML = '';
  modalContainerHidden.style.visibility = 'hidden';
  modalClose.classList.add('display-is-hidden');
};
closeBtnEl.addEventListener('click', onCloseBtnElClick);

/* /////////////////////////////////////////////////////////// */
const rerenderComics = event => {
  const target = event.target; // Елемент, на який було клікнуто
  const id = target.dataset.id;

  // Перевіряємо, чи клікнуто на певному дитячому елементі
  if (target.matches('.modal-comics-img, .comics-title')) {
    const comicsEvent = { target };
    onModalComicsClick(comicsEvent, id);
  }
};

clickRerenderComics.addEventListener('click', rerenderComics);
/* /////////////////////////////////////////////////////////// */

export const onModalOpenCharactersClick = async event => {
  const id = event.target.dataset.id;
  showLoader();
  try {
    const dataById = await api.getCharactersById({
      characterId: id,
    });
    const seriesIds = dataById[0].series.items.map(serie =>
      serie.resourceURI.split('/').pop()
    );
    const comicsIds = dataById[0].comics.items.map(comic =>
      comic.resourceURI.split('/').pop()
    );

    for (let i = 0; i < 3; i += 1) {
      const comicId = comicsIds[i];
      const seriesId = seriesIds[i];
      dataById[0][`comic${i}`] = await api.getComicById({ comicId });
      dataById[0][`series${i}`] = await api.getSeriesById({ seriesId });
    }

    markupModalComics.innerHTML = '';

    const markup = `
  ${createMarkupCharacters(dataById[0])}
  ${createMarkuComics(dataById[0])}
`;
    modalContainerHidden.style.visibility = 'visible';
    markupModalCharacters.innerHTML = markup;

    modalClose.classList.remove('display-is-hidden');
    hideLoader();
  } catch (error) {
    hideLoader();
    Notify.failure('This information is missing');
  }
};

//clickDelegate.addEventListener('click', onModalOpenCharactersClick);

const createMarkupCharacters = array => {
  const { thumbnail, series0, series1, series2, name } = array;
  const markup = `
    <div class="wraper-characters">
          <img
            class="modal-characters-primary-img"
            src="${thumbnail.path}.${thumbnail.extension}"
            alt="${name}"
          />
          <div class="modal-slide">
            <ul class="modal-characters-list">
               <li>
            <img
              class="modal-characters-small-img"
              src="${series0[0].thumbnail.path}.${series0[0].thumbnail.extension}" 
              alt="${name}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${series1[0].thumbnail.path}.${series1[0].thumbnail.extension}" 
              alt="${name}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${series2[0].thumbnail.path}.${series2[0].thumbnail.extension}" 
              alt="${name}"
              width="80"
              height="80"
            />
          </li>
            </ul>
          </div>
        </div> 
        `;
  return markup;
};

const createMarkuComics = data => {
  const {
    id,
    thumbnail,
    name,
    description,
    modified,
    comics,
    comic0,
    comic1,
    comic2,
  } = data;

  if (comic0[0].creators.available === 0) {
    comic0[0].creators.items.push({ name: '' });
  }
  if (comic1[0].creators.available === 0) {
    comic1[0].creators.items.push({ name: '' });
  }
  if (comic2[0].creators.available === 0) {
    comic2[0].creators.items.push({ name: '' });
  }
  const formattedDate = new Date(modified).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const markup = `
  <div class="wraper-comics">
     <div class="comics-title-date">
        <h1 class="comics-name-title">${name}</h1>
        <p class="comics-date">${formattedDate}</p>
      </div>
      <p class="comics-description">${description}</p>
      <h2 class="comics-list-title">List of comics</h2>
      <ul class="comics-list ">
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${comic0[0].thumbnail.path}.${comic0[0].thumbnail.extension}"
            alt="${comic0[0].name}"
            data-id="${comic0[0].id}"
          />
          <h3 class="comics-title"  data-id="${comic0[0].id}">${comic0[0].title}</h3>
          <p class="comics-creator-name"  data-id="${comic0[0].id}">${comic0[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${comic1[0].thumbnail.path}.${comic1[0].thumbnail.extension}"
            alt="${comic1[0].name}"
            data-id="${comic1[0].id}"
          />
          <h3 class="comics-title" data-id="${comic1[0].id}">${comic1[0].title}</h3>
          <p class="comics-creator-name" data-id="${comic1[0].id}">${comic1[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${comic2[0].thumbnail.path}.${comic2[0].thumbnail.extension}"
            alt="${comic2[0].name}"
            data-id="${comic2[0].id}"
          />
          <h3 class="comics-title"  data-id="${comic2[0].id}">${comic2[0].title}</h3>
          <p class="comics-creator-name"  data-id="${comic2[0].id}">${comic2[0].creators.items[0].name}"</p>
        </li>
      </ul>
  </div>
     `;
  return markup;
};
