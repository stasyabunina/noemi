import vars from '../_vars';

vars.burger.addEventListener('click', () => {
  vars.nav.classList.toggle('header__nav--visible');
  document.body.classList.toggle('stop-scroll')
})

vars.menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    vars.nav.classList.remove('header__nav--visible');
    document.body.classList.remove('stop-scroll')
  })
})

document.addEventListener('click', (e) => {
  let target = e.target;

  if (!target.closest('.burger') && !target.closest('.header__nav') && !target.closest('.popup')) {
    vars.nav.classList.remove('header__nav--visible');
    document.body.classList.remove('stop-scroll')
  }
})
