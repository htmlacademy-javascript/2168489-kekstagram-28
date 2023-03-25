import {
  MIN_NUMBERS_OF_LIKES,
  MAX_NUMBERS_OF_LIKES,
  MIN_AVATAR_ID,
  MAX_AVATAR_ID,
  descriptions,
  messages,
  names,
} from './varibles.js';

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getDescription = () => descriptions[getRandomValue(0, descriptions.length - 1)];

const getLikes = () => getRandomValue(MIN_NUMBERS_OF_LIKES, MAX_NUMBERS_OF_LIKES);

const getAvatar = () => getRandomValue(MIN_AVATAR_ID, MAX_AVATAR_ID);

const getMessage = () => messages[getRandomValue(0, messages.length - 1)];

const getName = () => names[getRandomValue(0, names.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getRandomValue,
  getDescription,
  getLikes,
  getAvatar,
  getMessage,
  getName,
  isEscapeKey,
};
