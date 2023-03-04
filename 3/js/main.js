const NUMBER_OF_POSTS = 25;
const MIN_NUMBERS_OF_LIKES = 15;
const MAX_NUMBERS_OF_LIKES = 200;
const MAX_COMMENTS = 100;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const descriptions = ['Отличный вид', 'Вернуться бы еще раз сюда', 'Я это съел', 'Мои друзья', 'Посиделки'];
const messages = ['В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'];
const names = ['Михаил', 'Иван', 'Сергей', 'Татьяна', 'Мария', 'Ольга', 'Ярослава'];

let counter = 1;

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getDescription = () => descriptions[getRandomValue(0, descriptions.length - 1)];

const getLikes = () => getRandomValue(MIN_NUMBERS_OF_LIKES, MAX_NUMBERS_OF_LIKES);

const getAvatar = () => getRandomValue(MIN_AVATAR_ID, MAX_AVATAR_ID);

const getMessage = () => messages[getRandomValue(0, messages.length - 1)];

const getName = () => names[getRandomValue(0, names.length - 1)];

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

createPhotos();
