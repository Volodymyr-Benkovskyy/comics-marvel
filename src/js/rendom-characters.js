import { api } from './apiMarvel';
import { showNextSlide } from './helpers/slide';
const randomImg = document.querySelector('.js-random-img');
const randomDescr = document.querySelector('.js-random-descr');

const createRandomImg = array => {
  const data = array
    .map(({ id, thumbnail, name }) => {
      return `  <li class= "js-slide js-random-characters-img" data-id="${id}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${thumbnail.path}.${thumbnail.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${thumbnail.path}.${thumbnail.extension}"/>
      <img class="js-random-characters-img" data-id="${id}"
        src='${thumbnail.path}.${thumbnail.extension}'
        alt='${name}'
      /></picture>
    </li>`;
    })
    .join('');
  return data;
};

const renderRandomImg = data => {
  randomImg.insertAdjacentHTML('beforeend', createRandomImg(data));
};

const createRandomDescr = array => {
  const data = array
    .map(({ name, description, id }) => {
      return `
    <li class='js-random-characters-description' data-id="${id}">
      <h3 class='js-random-characters-title' data-id="${id}">${name}</h3>
      <p class='js-random-characters-text' data-id="${id}">${description}</p>
    </li>`;
    })
    .join('');
  return data;
};

const renderRandmDescr = data => {
  randomDescr.insertAdjacentHTML('beforeend', createRandomDescr(data));
};

const getRandomCharacters = async () => {
  try {
    const allCharacters = await api.getCharacters('/characters', {
      params: {
        limit: 10,
        offset: 0,
      },
    });
    let { results } = allCharacters;
    results = results.filter(({ description, thumbnail: { path } }) => {
      return description.length && !path.includes('not_available');
    });

    let randomCharactersArray = [];

    for (let i = 0; i < 5; i += 1) {
      const randomIndex = Math.floor(Math.random() * results.length);
      const randomCharacter = results[randomIndex];
      if (!randomCharactersArray.includes(randomCharacter)) {
        randomCharactersArray.push(randomCharacter);
      }
    }
    console.log(randomCharactersArray);
    renderRandomImg(randomCharactersArray);
    renderRandmDescr(randomCharactersArray);

    slideImagesArray = document.querySelectorAll('.js-slide');
    slideDescriptionsArray = document.querySelectorAll(
      '.js-random-characters-description'
    );
    setInterval(showNextSlide, 3500);
  } catch (error) {
    console.log(error);
    location.replace('../error.html');
    return { error: error.message };
  }
};
getRandomCharacters();
