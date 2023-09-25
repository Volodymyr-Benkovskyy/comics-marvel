slideImagesArray = null;
slideDescriptionsArray = null;
let slideIndex = 0;
let imageIndex = 0;

export const showNextSlide = () => {
  for (let i = 0; i < slideImagesArray.length; i += 1) {
    slideImagesArray[i].classList.remove('js-show');
    slideImagesArray[i].classList.add('js-slide');
  }

  for (let i = 0; i < slideDescriptionsArray.length; i += 1) {
    slideDescriptionsArray[i].classList.remove('js-active');
    slideDescriptionsArray[i].classList.add('js-random-characters-description');
  }

  imageIndex = (imageIndex + 1) % slideImagesArray.length;
  slideIndex = (slideIndex + 1) % slideDescriptionsArray.length;

  slideImagesArray[imageIndex].classList.add('js-show');
  slideImagesArray[imageIndex].classList.remove('js-slide');

  slideDescriptionsArray[slideIndex].classList.add('js-active');
  slideDescriptionsArray[slideIndex].classList.remove(
    'js-random-characters-description'
  );
};
