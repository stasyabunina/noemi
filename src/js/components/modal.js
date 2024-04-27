import vars from '../_vars';

document.body.classList.add('stop-scroll');

vars.popupClose.addEventListener('click', () => {
  vars.popup.classList.add('popup--hidden');
  vars.popupWrapper.classList.add('popup__wrapper--hidden');
  document.body.classList.remove('stop-scroll');
})
