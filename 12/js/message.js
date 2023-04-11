import { ERROR_TIMEOUT } from './varibles.js';
import { isEscapeKey } from './utils.js';
import { hideModal, unblockSubmitButton } from './form.js';

const successMessageTemplate = document
  .querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplate = document
  .querySelector('#error')
  .content
  .querySelector('.error');

const handleDocumentKeydownSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const handleDocumentClickSuccess = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

const handleSuccessCloseButtonClick = () => {
  closeSuccessMessage();
};

function closeSuccessMessage () {
  document.body.querySelector('.success').remove();

  document.removeEventListener('keydown', handleDocumentKeydownSuccess);
  document.removeEventListener('click', handleDocumentClickSuccess);

}

const showSuccessMessage = () => {
  const successModal = successMessageTemplate.cloneNode(true);
  document.body.append(successModal);

  successModal.querySelector('.success__button').addEventListener('click', handleSuccessCloseButtonClick);
  document.addEventListener('click', handleDocumentClickSuccess);
  document.addEventListener('keydown', handleDocumentKeydownSuccess);

  unblockSubmitButton();
  hideModal();
};

const handleDocumentKeydownError = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const handleDocumentClickError = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.error__inner')) {
    closeErrorMessage();
  }
};

const handleErrorCloseButtonClick = () => {
  closeErrorMessage();
};

function closeErrorMessage () {
  document.body.querySelector('.error').remove();

  document.removeEventListener('keydown', handleDocumentKeydownError);
  document.removeEventListener('click', handleDocumentClickError);
}

const showErrorMessage = () => {
  const errorModal = errorMessageTemplate.cloneNode(true);

  errorModal.querySelector('.error__button').addEventListener('click', handleErrorCloseButtonClick);
  document.addEventListener('click', handleDocumentClickError);
  document.addEventListener('keydown', handleDocumentKeydownError);

  document.body.append(errorModal);

  unblockSubmitButton();
};

const handleGetFail = (errorText) => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.left = '0';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '60px';
  errorBlock.style.color = 'red';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.padding = '20px';
  errorBlock.style.backgroundColor = 'white';
  errorBlock.textContent = errorText;
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

export { showSuccessMessage, showErrorMessage, handleGetFail };
