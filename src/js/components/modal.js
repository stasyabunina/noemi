const popup = document.querySelector('.popup');
const popupWrapper = document.querySelector('.popup__wrapper');
const popupClose = document.querySelector('.popup__close');

popupClose.addEventListener('click', () => {
  popup.classList.add('popup--hidden');
  popupWrapper.classList.add('popup__wrapper--hidden');
  document.body.classList.remove('stop-scroll');
})
