const NUMBER_OF_POSTS = 25;
const MIN_NUMBERS_OF_LIKES = 15;
const MAX_NUMBERS_OF_LIKES = 200;
const MAX_COMMENTS = 100;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const COMMENTS_PER_LOAD = 5;
const HASHTAG_CHECK = /#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const HASHTAG_ERROR_TEXT = 'Хештеги заполнены неправильно';
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const ERROR_TIMEOUT = 5000;
const TIMEDELAY = 500;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

const descriptions = ['Отличный вид', 'Вернуться бы еще раз сюда', 'Я это съел', 'Мои друзья', 'Посиделки'];
const messages = ['В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'];
const names = ['Михаил', 'Иван', 'Сергей', 'Татьяна', 'Мария', 'Ольга', 'Ярослава'];

export {
  NUMBER_OF_POSTS,
  MIN_NUMBERS_OF_LIKES,
  MAX_NUMBERS_OF_LIKES,
  MAX_COMMENTS,
  MIN_AVATAR_ID,
  MAX_AVATAR_ID,
  COMMENTS_PER_LOAD,
  HASHTAG_CHECK,
  MAX_HASHTAG_COUNT,
  HASHTAG_ERROR_TEXT,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  DEFAULT_SCALE,
  ERROR_TIMEOUT,
  TIMEDELAY,
  FILE_TYPES,
  SubmitButtonText,
  descriptions,
  messages,
  names,
};
