const projectData = [{
        id: 0,
        name: 'Project name goes here...',
        image: 'images/laptop.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
        live: 'https://gabrielcoder247.github.io/',
        source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
        btnLive: 'see live',
        btnSource: 'see source',
        btnImgGit: 'images/ic_github.png',
        btnImgTeal: 'images/ic_link_teal.png',
        seeThis: 'See this project',
    },
    {
        id: 1,
        name: 'Project name goes here...',
        image: 'images/screen.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
        live: 'https://gabrielcoder247.github.io/',
        source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
        btnLive: 'see live',
        btnSource: 'see source',
        btnImgGit: 'images/ic_github.png',
        btnImgTeal: 'images/ic_link_teal.png',
        seeThis: 'See this project',
    },
    {
        id: 2,
        name: 'Project name goes here...',
        image: 'images/Rectangle-21devices.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
        live: 'https://gabrielcoder247.github.io/',
        source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
        btnLive: 'see live',
        btnSource: 'see source',
        btnImgGit: 'images/ic_github.png',
        btnImgTeal: 'images/ic_link_teal.png',
        seeThis: 'See this project',
    },
    {
        id: 3,
        name: 'Project name goes here...',
        image: 'images/Rectangle47_1.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
        live: 'https://gabrielcoder247.github.io/',
        source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
        btnLive: 'see live',
        btnSource: 'see source',
        btnImgGit: 'images/ic_github.png',
        btnImgTeal: 'images/ic_link_teal.png',
        seeThis: 'See this project',
    },
    {
        id: 4,
        name: 'Project name goes here...',
        image: 'images/Rectangle21device__4.png',
        description: 'This is project that i have done in microverse ',
        tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
        live: 'https://gabrielcoder247.github.io/',
        source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
        btnLive: 'see live',
        btnSource: 'see source',
        btnImgGit: 'images/ic_github.png',
        btnImgTeal: 'target="images/ic_link_teal.png',
        seeThis: 'See this project',
    },
    {
        id: 5,
        name: 'Project name goes here...',
        image: 'images/Rectangle21device__4.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
        tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
        live: 'https://gabrielcoder247.github.io/',
        source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
        btnLive: 'see live',
        btnSource: 'see source',
        btnImgGit: 'images/ic_github.png',
        btnImgTeal: 'images/ic_link_teal.png',
        seeThis: 'See this project',
    },
];

console.log(projectData);

const projectContainer = document.querySelector('.m-project-container');

let projectTags = '';

projectData.forEach((item) => {
    projectTags += `
    <img src=${item.image}  class="p-image"alt="work${item.id} image" id="work${item.id}img" />
    <div class="project-name-${item.id} flex" id="project-name-${item.id}">
      <h3 class="work-name">${item.name}</h3>
      <div class="languages grid-container">
        <div class="html language-title">${item.tech[0]}</div>
        <div class="rails language-title">${item.tech[1]}</div>
        <div class="js language-title">${item.tech[2]}</div>
      </div>
      <br>
      <a class="see-this-project" id="${item.id}" href="#">
      <p class="text">${'See Project'}</p>
      <img class="arrow " src="images/arrow.png " alt="icon-arrow ">
  </a>
 </div>`;
});

projectContainer.innerHTML = projectTags;

const header = document.querySelector('header');
const projects = document.querySelector('.container');
const pagefooter = document.querySelector('.footer');
const hamburger = document.querySelector('#modal-harmburger');

let workopen = '#';

function openModalWindow() {
    const modalWindow = document.querySelector('#m-window');
    const projId = this.id;
    workopen += projId;
    const btnLive = document.querySelector('#btn-live');
    btnLive.textContent = projectData[projId].btnLive;

    const btnSource = document.querySelector('#btn-source');
    btnSource.textContent = projectData[projId].btnSource;

    const description = document.querySelector('.p-description');
    description.textContent = projectData[projId].description;

    const projImg = document.querySelector('#mw-img');
    projImg.src = projectData[projId].image;
    const btnImgGit = document.querySelector('#l-img-btn');
    btnImgGit.src = projectData[projId].btnImgGit;

    const projTech = document.querySelectorAll('#l-items div');
    projTech.forEach((item, i) => {
        item.textContent = projectData[projId].tech[i];
    });

    const projLive = document.querySelector('#btn-live');
    projLive.href = projectData[projId].live;

    const projSource = document.querySelector('#btn-source');
    projSource.href = projectData[projId].source;

    modalWindow.style.display = 'block';
    header.style.display = 'none';
    projects.style.display = 'none';
    pagefooter.style.display = 'none';
    hamburger.style.display = 'block';
}

const btnWork1 = document.getElementById('0');
const btnWork2 = document.getElementById('1');
const btnWork3 = document.getElementById('2');
const btnWork4 = document.getElementById('3');
const btnWork5 = document.getElementById('4');
const btnWork6 = document.getElementById('5');

btnWork1.addEventListener('click', openModalWindow);
btnWork2.addEventListener('click', openModalWindow);
btnWork3.addEventListener('click', openModalWindow);
btnWork4.addEventListener('click', openModalWindow);
btnWork5.addEventListener('click', openModalWindow);
btnWork6.addEventListener('click', openModalWindow);

function closeWindow() {
    const popupwindow = document.querySelector('#m-window');
    popupwindow.style.display = 'none';
    header.style.display = 'flex';
    projects.style.display = 'block';
    pagefooter.style.display = 'flex';
    hamburger.style.display = 'block';
    const towork = document.createElement('a');
    towork.href = workopen;
    towork.click();
    workopen = '#';
}

const btnclose = document.querySelector('#close-btn');
btnclose.addEventListener('click', closeWindow);

// Open modal
const btn = document.querySelector('#work7');
const btnSub = document.querySelector('#see-this-project-2');

const openWindowModal = () => {
    const modalWindow = document.querySelector('#m-window');
    const projId = 5;

    workopen += projId;

    const projTitle = document.querySelector('.p-title');
    projTitle.textContent = projectData[projId].name;
    console.log(projTitle);

    const description = document.querySelector('.p-description');
    description.textContent = projectData[projId].description;

    const btnLive = document.querySelector('#d-btn-live');
    btnLive.textContent = projectData[projId].btnLive;
    const seeThis = document.querySelector('.text');
    seeThis.textContent = projectData[projId].seeThis;

    const btnSource = document.querySelector('#d-btn-source');
    btnSource.textContent = projectData[projId].btnSource;

    const projImg = document.querySelector('#mw-img');
    projImg.src = projectData[projId].image;
    const btnImgGit = document.querySelector('#l-img');
    btnImgGit.src = projectData[projId].btnImgGit;

    const projTech = document.querySelectorAll('#l-items div');
    projTech.forEach((item, i) => {
        item.textContent = projectData[projId].tech[i];
    });

    const projLive = document.querySelector('#d-btn-live');
    projLive.href = projectData[projId].live;

    const projSource = document.querySelector('#d-btn-source');
    projSource.href = projectData[projId].source;

    modalWindow.style.display = 'block';
    header.style.display = 'none';
    projects.style.display = 'none';
    pagefooter.style.display = 'none';
    hamburger.style.display = 'block';

    modalWindow.style.display = 'block';
    projects.style.display = 'none';
};

btn.addEventListener('click', openWindowModal);
btnSub.addEventListener('click', openWindowModal);