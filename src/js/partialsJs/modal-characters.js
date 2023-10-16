import { api } from './apiMarvel';

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
/* /////////////////////////////////////////////////////////// */

const onModalOpenCharactersClick = async event => {
  const id = event.target.dataset.id;
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

    console.log('seriesIds =>', seriesIds);
    console.log('seriesIds =>', comicsIds);

    const comicPromises = comicsIds.map(comicId =>
      api.getComicById({ comicId })
    );

    const seriesPromises = seriesIds.map(seriesId =>
      api.getSeriesById({ seriesId })
    );

    const [comics, series] = await Promise.all([
      Promise.all(comicPromises),
      Promise.all(seriesPromises),
    ]);

    for (let i = 0; i < 3; i += 1) {
      dataById[0][`comic${i}`] = comics[i];
      dataById[0][`series${i}`] = series[i];
    }

    console.log('dataById =>', dataById);
    const markups = [createMarkupCharacters(dataById[0])];

    renderModalCharacters.innerHTML = markups;
    modalClose.classList.remove('display-none');
  } catch (error) {
    console.error('Помилка при отриманні characterObject:', error);
    alert('Дані відсутні');
  }
};

clickDelegate.addEventListener('click', onModalOpenCharactersClick);
