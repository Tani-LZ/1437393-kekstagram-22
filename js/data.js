import {getRandomInteger, getRandomArrayElement} from './utils.js';

const IMAGE_DESCRIPTIONS = [
  'описание фотографии',
  'описание фотографии2',
  'описание фотографии3',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артем',
  'Татьяна',
  'Анна',
  'Женя',
  'Оксана',
];

const createComment = (id) => {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(0, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
}

const createCmments = (total) => {
  const comments = [];
  for(let i = 1; i <= total; i++) {
    comments.push(createComment(i));
  }

  return comments;
};

const createImageDescription = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(IMAGE_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: createCmments(getRandomInteger(0, 5)),
  };
};

const createDescriptions = (total) => {
  const descriptions = [];
  for(let i = 1; i <= total; i++) {
    descriptions.push(createImageDescription(i));
  }

  return descriptions;
};

export {createDescriptions};
