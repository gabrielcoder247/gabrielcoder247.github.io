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



let menuSection = document.querySelectorAll('nav a');

// for clickable event
menuSection.forEach(v => {
    v.onclick = (() => {
        setTimeout(() => {
            menuSection.forEach(j => j.classList.remove('active'))
            v.classList.add('active')
        }, 300)
    })
})
console.log(menuSection)