const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav')
const menuLinks = document.querySelectorAll('.header__nav-link')

burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav--visible');
  document.body.classList.toggle('stop-scroll')
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('header__nav--visible');
    document.body.classList.remove('stop-scroll')
  })
})

document.addEventListener('click', (e) => {
  let target = e.target;

  if (!target.closest('.burger') && !target.closest('.header__nav')) {
    nav.classList.remove('header__nav--visible');
    document.body.classList.remove('stop-scroll')
  }
})
