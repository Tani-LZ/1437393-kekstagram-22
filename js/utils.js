//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = function (min, max) {
  if (max < 0  || min >= max) {
    throw new Error('Минимальное число отрицательное или маинимальное число больше максимального');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger(0, 10);

export {getRandomInteger};

//Функция для проверки максимальной длины строки
const getCommentLength = function (text, maxLength) {
  return text.length <= maxLength;
};

getCommentLength('Функция для проверки максимальной длины строки', 140)

export {getCommentLength};
