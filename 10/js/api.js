import { renderThumbnails } from './make-picture.js';
import { handleGetFail } from './message.js';
import { clickOnUpload } from './form.js';

const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const load = (route, errorText, onSuccess, onFail, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA, renderThumbnails, handleGetFail);

const sendData = (body) =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, clickOnUpload, handleGetFail, Method.POST, body);

export { getData, sendData };
