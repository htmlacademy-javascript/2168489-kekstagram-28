import { renderThumbnails } from './make-picture.js';
import { debounce } from './utils.js';
import { TIMEDELAY } from './varibles.js';

const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filters = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;


const sortRandomly = (pictures) => pictures.slice().sort(() => Math.random() - 0.5).slice(0, PICTURES_COUNT);

const compareDiscussed = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;
const sortDiscussed = (pictures) => pictures.slice().sort(compareDiscussed);

const getFiltredPictures = (pictures) => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return sortRandomly(pictures);
    case Filter.DISCUSSED:
      return sortDiscussed(pictures);
    default:
      return pictures;
  }
};

const initFilters = (pictures) => {
  filters.classList.remove('img-filters--inactive');
  filters.addEventListener('click', debounce((evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }

    filters
      .querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');

    clickedButton.classList.add('img-filters__button--active');

    currentFilter = clickedButton.id;

    renderThumbnails(getFiltredPictures(pictures));
  }), TIMEDELAY);
  renderThumbnails(pictures);
};

export default initFilters;
