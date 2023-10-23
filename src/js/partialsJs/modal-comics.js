import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { onModalOpenCharactersClick } from './modal-characters';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const modalClose = document.querySelector('.js-modal-section-characters');
const modalContainerHidden = document.querySelector(
  '.modal-container-characters'
);
const clickDelegateComics = document.querySelector('.js-click-delegate-comics');
const markupModalComics = document.querySelector('.js-markup-modal-comics');
const markupModalCharacters = document.querySelector(
  '.js-markup-modal-characters'
);

const clickRerenderCharacters = document.querySelector(
  '.js-click-rerender-Characters'
);

const rerenderCharacters = event => {
  const target = event.target; // Елемент, на який було клікнуто
  const id = target.dataset.id;
  // Перевіряємо, чи клікнуто на певному дитячому елементі
  if (target.matches('.character-img, .character-name')) {
    const fakeEvent = { target };
    onModalOpenCharactersClick(fakeEvent, id);
    console.log('rerenderCharacters');
  }
};

clickRerenderCharacters.addEventListener('click', rerenderCharacters);

/* ////////////////////////////////////////// */

export const onModalComicsClick = async event => {
  const id = event.target.dataset.id;
  showLoader();

  try {
    const comicsDataById = await api.getComicById({ comicId: id });

    const creatorsIds = comicsDataById[0].creators.items.map(creator =>
      creator.resourceURI.split('/').pop()
    );

    const characterIds = comicsDataById[0].characters.items.map(character =>
      character.resourceURI.split('/').pop()
    );

    comicsDataById[0].authors = comicsDataById[0].creators.items.map(
      ({ name, role }) => {
        return { name, role };
      }
    );

    const creatorId = creatorsIds[0];
    const creator = await api.getCreatorsById({ creatorId });
    comicsDataById[0].authors[0].pic = `${creator[0].thumbnail.path}.${creator[0].thumbnail.extension}`;

    console.log('creatorId =>', creatorsIds[0]);

    for (let i = 0; i < characterIds.length; i += 1) {
      const id = characterIds[i];
      const character = await api.getCharactersById({ characterId: id });
      comicsDataById[0].characters.items[
        i
      ].pic = `${character[0].thumbnail.path}.${character[0].thumbnail.extension}`;
      comicsDataById[0].characters.items[i].id = id;
    }

    modalClose.classList.remove('display-is-hidden');
    console.log('comicsDataById =>', comicsDataById);

    markupModalCharacters.innerHTML = '';
    const markup = createModalComicsMarkup(comicsDataById[0]);
    markupModalComics.innerHTML = markup;
    modalContainerHidden.style.visibility = 'visible';
    hideLoader();
  } catch (error) {
    hideLoader();
    Notify.failure('This information is missing');
  }
};

/* //////////////////////////// */

const markupSeriesData = images => {
  return images
    .slice(0, 3)
    .map(el => {
      return `<li>
            <img class="photo-small-image" src="${el.path}.${el.extension}" alt="" />
          </li>`;
    })
    .join('');
};

const markupAuthorsData = authors => {
  return authors
    .slice(0, 1)
    .map(el => {
      return `
      <img class="author-img" src="${el.pic}" alt="${el.name}">
          <div class="author-description">
            <p class="author-role">${el.role}</p>
            <h3 class="author-name">${el.name}</h3>
             </div>
          `;
    })
    .join('');
};

const markupCharactersData = characters => {
  return characters

    .map(el => {
      return `<li class="characters-item" data-id="${el.id}">
            <img class="character-img" src="${el.pic}" alt="" data-id="${el.id}"/>
            <h3 class="character-name" data-id="${el.id}">${el.name}</h3>
          </li>`;
    })
    .join('');
};

const createModalComicsMarkup = ({
  description,
  thumbnail,
  prices,
  title,
  format,
  modified,
  authors,
  characters,
  images,
  dates,
  pageCount,
}) => {
  const writers = authors.filter(author => author.role === 'writer');
  const writerName = writers.length > 0 ? writers[0].name : '';

  /* /////////////////////// */

  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const unformattedDate = +Date.parse(modified);
  const dateString = new Date(unformattedDate);
  const date =
    dateString.toString() !== 'Invalid Date'
      ? dateString.toLocaleDateString('en-US', options)
      : '';

  const year = new Date(dates[0].date).getFullYear();
  return `

  <div class=" box-hero-images-modal">

     <img src="${thumbnail.path}.${
    thumbnail.extension
  }" class="hero-photo-comic" alt="" />

        <ul class="list-hero-photo-small">
          ${markupSeriesData(images)}
        </ul>
   </div>
  <div class="container-description-comics-modal">

 <div class="box-description-comics">
        <div class="info-container">
          <h1 class="title-name-hero-comics">${title}</h1>

            <p class="writer-separation"> <span class="writerName-author">
            ${writerName}</span>|<span class="writerName-date">
            ${date}</span>
            </p>

          </div>
        </div>
        <p class="text-description-info-comics">${
          description ? description : ''
        }</p>
        <ul class="list-info-comics">
          <li class="item-info-comics">
            <P class="text-product-details">FORMAT</P>
            <P class="text-format-render">${format}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">YEAR RELEASED</P>
            <P class="text-format-render">${year}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">PAGES</P>
            <P class="text-format-render">${pageCount}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">PRICE</P>
            <P class="text-format-render">$${prices[0].price}</P>
          </li>
        </ul>
        <h2 class="title-creators">Creator</h2>
        <div class="creators-box">
          ${markupAuthorsData(authors)}
        </div>
        <h2 class="title-characters">Characters</h2>
        <ul class="characters-list ">
          ${markupCharactersData(characters.items)}
        </ul>
      </div>
  </div>
      
  `;
};
