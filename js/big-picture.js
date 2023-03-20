import { COMMENTS_PER_LOAD } from './varibles.js';
import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const socialComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');

const commentsList = [];
let commentsCount = 0;
let commentsTotal = 0;

const showModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const addEscListiner = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
};


