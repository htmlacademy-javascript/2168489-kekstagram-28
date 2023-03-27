import { COMMENTS_PER_LOAD } from './varibles.js';
import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureElement = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');

const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const photoDescription = document.querySelector('.social__caption');
const singleComment = socialComments.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const cancelCross = bigPicture.querySelector('#picture-cancel');

let shownComments = [];

const createFullPictureComments = (commentsData) => {
  commentsData.forEach((item) => {
    const { avatar, name, message } = item;

    const comment = singleComment.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    socialComments.append(comment);
  });

};

const showCommentsByDefault = (comments) => {
  const shownCommentsByDefault = comments.slice(0, COMMENTS_PER_LOAD);

  createFullPictureComments(shownCommentsByDefault);
  socialCommentCount.textContent = `${shownCommentsByDefault.length} из ${comments.length} комментариев`;

  if (shownCommentsByDefault.length >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const renderMoreComments = () => {
  const additionalCommentsToShow = shownComments.slice(socialComments.children.length, socialComments.children.length + 5);

  createFullPictureComments(additionalCommentsToShow);
  socialCommentCount.textContent = `${socialComments.children.length} из ${shownComments.length} комментариев`;

  if (shownComments.length <= socialComments.children.length) {
    commentsLoader.classList.add('hidden');
  }
};

const hideModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', renderMoreComments);
  document.removeEventListener('click', cancelCross);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

cancelCross.addEventListener('click', () =>
  hideModal()
);

const showModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', cancelCross);
};


const showFullPicture = ({url, likes, comments, description}) => {
  showModal();

  bigPictureElement.querySelector('img').src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  photoDescription.textContent = description;

  socialComments.innerHTML = '';
  shownComments = comments;
  commentsLoader.addEventListener('click', renderMoreComments);
  showCommentsByDefault(comments);

};

export {
  showFullPicture,
};
