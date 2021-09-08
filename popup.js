const projectObj = {
  work1: {
    id: 1,
    name: 'Project name goes here...',
    image: 'images/laptop.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://gabrielcoder247.github.io/',
    source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
  },
  work2: {
    id: 2,
    name: 'Project name goes here...',
    image: 'images/screen.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://gabrielcoder247.github.io/',
    source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
  },
  work3: {
    id: 3,
    name: 'Project name goes here...',
    image: 'images/Rectangle-21devices.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://gabrielcoder247.github.io/',
    source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
  },
  work4: {
    id: 4,
    name: 'Project name goes here...',
    image: 'img/work_img/Portfolio3.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://gabrielcoder247.github.io/',
    source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
  },
  work5: {
    id: 5,
    name: 'Project name goes here...',
    image: 'img/work_img/Portfolio3.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://gabrielcoder247.github.io/',
    source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
  },
  work6: {
    id: 6,
    name: 'Project name goes here...',
    image: 'img/work_img/Portfolio3.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://gabrielcoder247.github.io/',
    source: 'https://github.com/gabrielcoder247/gabrielcoder247.github.io',
  },
};

const projectData = [{
  id: 1,
  name: 'Project name goes here...',
  image: 'images/laptop.png',
  description: 'This is project that i have done in microverse ',
  tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
},
{
  id: 2,
  name: 'Project name goes here...',
  image: 'images/screen.png',
  description: 'This is project that i have done in microverse ',
  tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
},
{
  id: 3,
  name: 'Project name goes here...',
  image: 'images/Rectangle-21devices.png',
  description: 'This is project that i have done in microverse ',
  tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
},
{
  id: 4,
  name: 'Project name goes here...',
  image: 'images/Rectangle47_1.png',
  description: 'This is project that i have done in microverse ',
  tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
},
{
  id: 5,
  name: 'Project name goes here...',
  image: 'images/Rectangle-21device-3.png',
  description: 'This is project that i have done in microverse ',
  tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
},
{
  id: 6,
  name: 'Project name goes here...',
  image: 'images/Rectangle21device__4.png',
  description: 'This is project that i have done in microverse ',
  tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
},
];

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
      <a class="see-this-project" id="work${item.id}" href="#">
      <p class="text">${'See Project'}</p>
      <img class="arrow " src="images/arrow.png " alt="icon-arrow ">
  </a>
 </div>`;
});

projectContainer.innerHTML = projectTags;

const header = document.querySelector('header');
const projects = document.querySelector('.container');
const pagefooter = document.querySelector('.footer');

let workopen = '#';

function openModalWindow() {
  const modalWindow = document.querySelector('#m-window');
  const workid = this.id;
  workopen += workid;

  const protitle = document.querySelector('#p-title');
  protitle.textContent = projectObj[workid].name;

  const proimg = document.querySelector('#mw-img');
  proimg.src = projectObj[workid].image;

  const protech = document.querySelectorAll('#l-items li');
  protech.forEach((item, i) => {
    item.textContent = projectObj[workid].tech[i];
  });

  const prolive = document.querySelector('#btn-live');
  prolive.href = projectObj[workid].live;

  const prosource = document.querySelector('#btn-source');
  prosource.href = projectObj[workid].source;

  modalWindow.style.display = 'block';
  header.style.display = 'none';
  projects.style.display = 'none';
  pagefooter.style.display = 'none';
}

const btnWork1 = document.querySelector('#work1');
const btnWork2 = document.querySelector('#work2');
const btnWork3 = document.querySelector('#work3');
const btnWork4 = document.querySelector('#work4');

btnWork1.addEventListener('click', openModalWindow);
btnWork2.addEventListener('click', openModalWindow);
btnWork3.addEventListener('click', openModalWindow);
btnWork4.addEventListener('click', openModalWindow);

function closeWindow() {
  const popupwindow = document.querySelector('#m-window');
  popupwindow.style.display = 'none';
  header.style.display = 'flex';
  projects.style.display = 'block';
  pagefooter.style.display = 'flex';
  const towork = document.createElement('a');
  towork.href = workopen;
  towork.click();
  workopen = '#';
}

const btnclose = document.querySelector('#close-btn');
btnclose.addEventListener('click', closeWindow);