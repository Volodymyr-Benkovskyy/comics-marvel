const btnCharacters = document.querySelector('.js-characters-home-btn');
const nextSection = document.querySelector('.js-characters-sort-section');

const onScrollBtn = () => {
  nextSection.scrollIntoView({ behavior: 'smooth' });
};

btnCharacters.addEventListener('click', onScrollBtn);
