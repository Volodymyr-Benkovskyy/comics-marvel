import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
const modalClose = document.querySelector('.js-modal-section-characters');
const closeBtnEl = document.querySelector('.js-modal-close-btn');
const renderModalCharacters = document.querySelector(
  '.js-render-modal-characters'
);
const renderModalComics = document.querySelector('.js-render-modal-comics');
const clickDelegate = document.querySelector('.js-click-delegate');

const onCloseBtnElClick = () => {
  renderModalCharacters.innerHTML = '';
  renderModalComics.innerHTML = '';
  modalClose.classList.add('display-none');
};
closeBtnEl.addEventListener('click', onCloseBtnElClick);

/* /////////////////////////////////////////////////////////// */

const onModalOpenCharactersClick = async event => {
  const id = event.target.dataset.id;
  showLoader();
  try {
    const dataById = await api.getCharactersById({
      characterId: id,
    });

    if (response.total === 0) {
      modalClose.classList.remove('display-none');
      renderModalCharacters.innerHTML = '<div class="nothing-seach"></div>';
    }

    const seriesIds = dataById[0].series.items.map(serie =>
      serie.resourceURI.split('/').pop()
    );

    const comicsIds = dataById[0].comics.items.map(comic =>
      comic.resourceURI.split('/').pop()
    );

    console.log('seriesIds =>', seriesIds);
    console.log('comicsIds =>', comicsIds);

    for (let i = 0; i < 3; i += 1) {
      const comicId = comicsIds[i];
      const seriesId = seriesIds[i];
      dataById[0][`comic${i}`] = await api.getComicById({ comicId });
      dataById[0][`series${i}`] = await api.getSeriesById({ seriesId });
    }

    console.log('dataById =>', dataById);
    const markups = [
      createMarkupCharacters(dataById[0]),
      createMarkuComics(dataById[0]),
    ];

    renderModalCharacters.innerHTML = markups[0];
    renderModalComics.innerHTML = markups[1];
    modalClose.classList.remove('display-none');
    hideLoader();
  } catch (error) {
    // renderModalCharacters.innerHTML = '<div class="nothing-seach"></div>';
    hideLoader();
    location.replace('./error.html');
  }
};

clickDelegate.addEventListener('click', onModalOpenCharactersClick);

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
              alt=""
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${series1[0].thumbnail.path}.${series1[0].thumbnail.extension}" 
              alt=""
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${series2[0].thumbnail.path}.${series2[0].thumbnail.extension}" 
              alt=""
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
      <ul class="comics-list">
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${comic0[0].thumbnail.path}.${comic0[0].thumbnail.extension}"
            alt="${comic0[0].name}"
            data-id="${comic0[0].id}"
          />
          <h3 class="comics-title">${comic0[0].title}</h3>
          <p class="comics-creator-name">${comic0[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${comic1[0].thumbnail.path}.${comic1[0].thumbnail.extension}"
            alt="${comic1[0].name}"
            data-id="${comic1[0].id}"
          />
          <h3 class="comics-title">${comic1[0].title}</h3>
          <p class="comics-creator-name">${comic1[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${comic2[0].thumbnail.path}.${comic2[0].thumbnail.extension}"
            alt="${comic2[0].name}"
            data-id="${comic2[0].id}"
          />
          <h3 class="comics-title">${comic2[0].title}</h3>
          <p class="comics-creator-name">${comic2[0].creators.items[0].name}</p>
        </li>
      </ul>
  </div>
     `;
  return markup;
};
