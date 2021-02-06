//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = function (min, max) {
  // if (min || max < 0  || min >= max) {
  //   throw new Error('Минимальное число отрицательное или маинимальное число больше максимального');
  // }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger(0, 10);

//Функция для проверки максимальной длины строки
const getCommentLength = function (text, maxLength) {
  return text.length <= maxLength;
};

getCommentLength('Функция для проверки максимальной длины строки', 140)

const IMAGE_DESCRIPTIONS = [
  'описание фотографии',
  'описание фотографии2',
  'описание фотографии3',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Артем',
  'Татьяна',
  'Анна',
  'Женя',
  'Оксана',
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createComments = () => {
  return {
    commentID: getRandomInteger(1, 25),
    avatar: 'img/avatar-' + getRandomInteger(0, 6) + '.svg',
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  }
}

const similarComments = new Array(2).fill(null).map(() => createComments());

const createImageDescription = () => {
  return {
    id: getRandomInteger(1, 25),
    url: 'photos/' + getRandomInteger(1, 25) + '.jpg',
    description: getRandomArrayElement(IMAGE_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: similarComments,
  };
};

const createDescriptionArray  = () => {
  const similarPhotoDescriptions = new Array(25).fill(null).map(() => createImageDescription());
  return similarPhotoDescriptions;
};

createDescriptionArray();
