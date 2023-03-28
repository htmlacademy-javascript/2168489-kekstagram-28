import { HASHTAG_CHECK, MAX_HASHTAG_COUNT, HASHTAG_ERROR_TEXT } from './varibles.js';

const body = document.querySelector('body');
const formModal = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadCancelButton = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

uploadCancelButton.addEventListener('click', hideModal);

const isTextFieldFocused = () =>
  document.activeElement === hashtagField || document.activeElement === commentField;

function handleDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

function hideModal () {
  form.reset();
  pristine.reset();
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleDocumentKeydown);
}

const isValidTag = (tag) => HASHTAG_CHECK.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  HASHTAG_ERROR_TEXT,
);

const handleFormSubmit = (evt) => {
  const valid = pristine.validate();
  if (valid) {
    form.submit();
  }
  evt.preventDefault();
};

const showModal = () => {
  formModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', handleDocumentKeydown);
};

form.addEventListener('submit', handleFormSubmit);

const clickOnUpload = function () {
  uploadFile.addEventListener('change', showModal);
};

export { clickOnUpload };
