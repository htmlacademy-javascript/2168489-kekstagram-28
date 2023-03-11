import {
  MAX_COMMENTS,
  NUMBER_OF_POSTS,
} from './varibles.js';

import {
  getRandomValue,
  getDescription,
  getLikes,
  getAvatar,
  getMessage,
  getName,
} from './utils.js';

let counter = 1;

const createComment = () => ({
  id: counter++,
  avatar: `img/avatar-${getAvatar()}.svg`,
  message: getMessage(),
  name: getName()
});

const createComments = (quantity) => Array.from({length: quantity}, (_, index) => createComment(index));

const createPhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getDescription(),
  likes: getLikes(),
  comments: createComments(getRandomValue(0, MAX_COMMENTS)),
});

const createPhotos = () => Array.from({length: NUMBER_OF_POSTS}, (_, index) => createPhoto(index));

export { createPhotos };
