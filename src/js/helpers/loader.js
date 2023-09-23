import { Spinner } from 'spin.js';

const customLoader = new Spinner({
  lines: 16,
  length: 18,
  width: 4,
  radius: 20,
  color: '#600404',
}).spin();

export const showLoader = () => {
  const loaderContainer = document.getElementById('loader-container');
  loaderContainer.innerHTML = '';
  loaderContainer.appendChild(customLoader.el);
  loaderContainer.style.display = 'flex';
};

export const hideLoader = () => {
  const loaderContainer = document.getElementById('loader-container');
  loaderContainer.style.display = 'none';
  loaderContainer.innerHTML = '';
};
