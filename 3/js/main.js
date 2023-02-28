const NUMBER_OF_POSTS = 25;
const MIN_NUMBERS_OF_LIKES = 15;
const MAX_NUMBERS_OF_LIKES = 200;
const MAX_COMMENTS = 100;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const description = ['Отличный вид', 'Вернуться бы еще раз сюда', 'Я это съел', 'Мои друзья', 'Посиделки'];
const messages = ['В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'];
const names = ['Михаил', 'Иван', 'Сергей', 'Татьяна', 'Мария', 'Ольга', 'Ярослава'];

// функция для генерации id
const getUniqueId = (numberOfId) => {
  const idArray = [];
  for (let i = 1; i <= numberOfId; i++) {
    idArray.push(i);
  }
  return idArray;
};
const id = getUniqueId(NUMBER_OF_POSTS);

// функция для генерации URL
const getUniqueUrl = (numberOfUrl) => {
  const urlArray = [];
  for (let i = 1; i <= numberOfUrl; i++) {
    urlArray.push(i);
  }
  return urlArray;
};
const url = getUniqueUrl(NUMBER_OF_POSTS);


// функция для генерации случайного количества лайков от 15 до 200
const getLikes = () => {
  const likesCounter = Math.floor(Math.random() * (MAX_NUMBERS_OF_LIKES, MIN_NUMBERS_OF_LIKES) + MIN_NUMBERS_OF_LIKES);
  return likesCounter;
};

// функция для генерации id комментария
const getCommentId = () => {
  const commentId = Math.floor(Math.random() * MAX_COMMENTS);
  return commentId;
};

//функция для генерации случайного описания
const getDescription = () => {
  const randomDescription = Math.floor(Math.random() * description.length - 1);
  return randomDescription;
};

// функция для генерации пути до файла с аватаром
const getAvatarId = () => {
  const avatarId = Math.floor(Math.random() * (MAX_AVATAR_ID - MIN_AVATAR_ID) + MIN_AVATAR_ID);
  return avatarId;
};

// функция для генерации сообщения
const getMessage = () => {
  const randomMessage = Math.floor(Math.random() * messages.lenght - 1);
  return randomMessage;
};

// функция для генерации имени
const getName = () => {
  const randomName = Math.floor(Math.random() * names.length - 1);
  return randomName;
};

export const createPosts = () => ({
  id:getUniqueId(NUMBER_OF_POSTS),
  url: getUniqueUrl(NUMBER_OF_POSTS),
  description: getDescription(),
  likes: getLikes(),
  comments: {
    id: getCommentId(MAX_COMMENTS),
    avatar: getAvatarId(MIN_AVATAR_ID, MAX_AVATAR_ID),
    message: getMessage(),
    name: getName()
  },
});
