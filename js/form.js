import { HASHTAG_CHECK, MAX_HASHTAG_COUNT, HASHTAG_ERROR_TEXT } from './varibles.js';
import { resetScale, setScale } from './scale.js';
import { resetEffects } from './effects.js';
import { handleGetFail } from './message.js';
import { sendData } from './api.js';

const body = document.querySelector('body');
const formModal = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadCancelButton = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const SubmitButtonText = {
  IDLE: 'Данные опубликованы',
  SENDING: 'Сохраняю...',
  POSTING: 'Сохранить'
};
const submitButton = document.querySelector('#upload-submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

uploadCancelButton.addEventListener('click', hideModal);

const isTextFieldFocused = () =>
  document.activeElement === hashtagField || document.activeElement === commentField;

const handleDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

function hideModal () {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
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
  HASHTAG_ERROR_TEXT
);

const unblockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const handleFormSubmit = (onSuccess) => {
  const valid = pristine.validate();
  form.addEventListener('submit',(evt) => {
    if (valid) {
      form.submit();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch((err) => {
          handleGetFail(err.message);
        })
        .finally(unblockSubmitButton);
      setTimeout (() => hideModal(), 3000);
    }
  });
};


const showModal = () => {
  setScale();
  formModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', handleDocumentKeydown);
};

form.addEventListener('submit', handleFormSubmit);

const clickOnUpload = () => {
  uploadFile.addEventListener('change', showModal);
};

export { clickOnUpload };
