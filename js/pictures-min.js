import {createDescriptions} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarUserPictures = createDescriptions(6);

const similarUserPictureFragment = document.createDocumentFragment();

similarUserPictures.forEach(({url, likes}) => {
  const userPictureElement = otherUserPictureTemplate.cloneNode(true);
  // userPictureElement.querySelector('.picture__comments').textContent = comments;
  userPictureElement.querySelector('.picture__img').src = url;
  userPictureElement.querySelector('.picture__likes').textContent = likes;
  similarUserPictureFragment.appendChild(userPictureElement);
});

picturesContainer.appendChild(similarUserPictureFragment);
