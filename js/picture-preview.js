export default class PicturePreview {
  static render(descriptions) {
    const picturesContainer = document.querySelector('.pictures');
    const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

    const similarUserPictureFragment = document.createDocumentFragment();

    descriptions.forEach(({url, likes, comments}) => {
      const userPictureElement = otherUserPictureTemplate.cloneNode(true);
      userPictureElement.querySelector('.picture__comments').textContent = comments.length;
      userPictureElement.querySelector('.picture__img').src = url;
      userPictureElement.querySelector('.picture__likes').textContent = likes;
      similarUserPictureFragment.appendChild(userPictureElement);
    });

    picturesContainer.appendChild(similarUserPictureFragment);
  }
}
