const hamburger = document.getElementById('hamburger');
const navbg = document.querySelector('.nav-bg');
const navItems = document.querySelector('.nav-items');
const homeBtn = document.querySelector('.main-icon');
const container = document.querySelector('.content-container');
const footerLine = document.querySelector('.footer-container');
const linkedinBtn = document.querySelector('.linkedin-btn');
const githubBtn = document.querySelector('.github-btn');
const navClose = document.querySelector('.nav-close');
const projModal = document.querySelector('.project-modal');
const projCloseBtn = document.querySelector('.close-modal');
const projNavBtn = document.getElementById('project-btn');
const desktopProjBtn = document.getElementById('d-project-btn');
const triangle = document.querySelector('.triangle');

// Disable then reenable animations on load
// to prevent unexpected animations

window.onload = () => {
  navbg.classList.add('disable-anim');
  navItems.classList.add('disable-anim');
  projModal.classList.add('.disable-anim');
  setTimeout(() => {
    navbg.classList.remove('disable-anim');
    navItems.classList.remove('disable-anim');
    projModal.classList.remove('.disable-anim');
  }, 500);
};

//
// Listen for hover
//

linkedinBtn.addEventListener('mouseover', () => {
  footerLine.setAttribute('data-icon', 'linkedin');
});

linkedinBtn.addEventListener('mouseout', () => {
  footerLine.setAttribute('data-icon', 'none');
});

githubBtn.addEventListener('mouseover', () => {
  footerLine.setAttribute('data-icon', 'github');
});

githubBtn.addEventListener('mouseout', () => {
  footerLine.setAttribute('data-icon', 'none');
});

//
// Listen for button clicks
//

// Mobile hamburger button
hamburger.addEventListener('click', () => {
  if (navbg.getAttribute('data-active') === 'false') {
    navbg.setAttribute('data-active', true);
    navItems.setAttribute('data-active', true);
    navClose.setAttribute('data-active', true);
  } else {
    navbg.setAttribute('data-active', false);
    navItems.setAttribute('data-active', false);
    navClose.setAttribute('data-active', false);
  }
});

projCloseBtn.addEventListener('click', () => {
  projModal.setAttribute('data-active', false);
  triangle.classList.remove('r180');
});

projNavBtn.addEventListener('click', () => {
  navbg.setAttribute('data-active', false);
  navItems.setAttribute('data-active', false);
  navClose.setAttribute('data-active', false);
  projModal.setAttribute('data-active', true);
});

desktopProjBtn.addEventListener('click', () => {
  if (projModal.getAttribute('data-active') === 'false') {
    projModal.setAttribute('data-active', true);
    triangle.classList.add('r180');
  } else {
    projModal.setAttribute('data-active', false);
    triangle.classList.remove('r180');
  }
});

// Click off of navbar to close
navClose.addEventListener('click', () => {
  navbg.setAttribute('data-active', false);
  navItems.setAttribute('data-active', false);
  navClose.setAttribute('data-active', false);
});

// Resize navbar height and close mobile nav menu
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navbg.setAttribute('data-active', false);
    navItems.setAttribute('data-active', false);
    navClose.setAttribute('data-active', false);
  }
  else {
    projModal.setAttribute('data-active', false);
    triangle.classList.remove('r180');
  }
  projModal.classList.add('disable-anim');
  setTimeout(() => {
    navbg.classList.remove('disable-anim');
    navItems.classList.remove('disable-anim');
    projModal.classList.remove('disable-anim');
  }, 500);
});

console.log('hello world!');
