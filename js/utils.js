//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = function (min, max) {
  if (max < 0  || min >= max) {
    throw new Error('Минимальное число отрицательное или маинимальное число больше максимального');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция для проверки максимальной длины строки
const getCommentLength = function (text, maxLength) {
  return text.length <= maxLength;
};

//функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

export {getRandomInteger, getCommentLength, getRandomArrayElement};
