const hambutton = document.getElementById('menu-harmbuger');
const main = document.querySelector('.container');
const menu = document.querySelector('.modal-container');

const hamburgerTwo = document.getElementById('modal-harmburger');

function openMenu() {
  if (menu.classList.contains('invisible')) {
    menu.classList.remove('invisible');
    main.classList.add('invisible');
  } else {
    menu.classList.add('invisible');
    main.classList.remove('invisible');
  }
}

hambutton.addEventListener('click', openMenu);
hamburgerTwo.addEventListener('click', openMenu);

// scrollspy section

const closebutton = document.querySelector('#modal-harmburger');

function closeMenu() {
  main.style.display = 'block';
  menu.style.display = 'none';
}

closebutton.addEventListener('click', closeMenu);

const listItem = document.querySelectorAll('.menu-btn');
listItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});