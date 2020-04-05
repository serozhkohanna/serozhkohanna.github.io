const header = document.querySelector(('.header'));
window.addEventListener('scroll', (e) => {
  pageYOffset >= 100 ? header.classList.add('scroll') : header.classList.remove('scroll');
})

const burgerMenuBtn = document.querySelector('.burger-menu');

const openMenu = (e) => {
  burgerMenuBtn.classList.toggle('open')
}
burgerMenuBtn.addEventListener('click', openMenu);

const menu = ['Home', 'About', 'Articles', 'Contact'];
const menuContainer = document.querySelector('.header-component-nav');

menu.forEach(item => {
  let menuItem = document.createElement('a');
  menuItem.textContent = item;
  menuItem.classList.add('header-component-nav-link');
  menuContainer.appendChild((menuItem))
})