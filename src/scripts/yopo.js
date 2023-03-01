const heroText = document.querySelector('.title');
const fauxBrowser = document.querySelector('.faux-browser-container');
const browserImg = document.querySelector('.browser-content');
const desktopImg = document.querySelector('.desktop-img');
const mobileImg = document.querySelector('.mobile-img');

const desktopImgArray = [
  'src/assets/img/yopo/yopoDesktopMain.webp',
  'src/assets/img/yopo/desktopMenu.webp',
  'src/assets/img/yopo/desktopOrder.webp',
  'src/assets/img/yopo/desktopContact.webp',
  'src/assets/img/yopo/yopoDesktopMain.webp',
];

const desktopAltText = [
  'The Yopo Sweet Mandarin desktop home page',
  'The Yopo Sweet Mandarin desktop menu page',
  'The Yopo Sweet Mandarin desktop order page',
  'The Yopo Sweet Mandarin desktop contact page',
  'The Yopo Sweet Mandarin desktop home page',
];

const mobileImgArray = [
  'src/assets/img/yopo/yopoMobileMain.webp',
  'src/assets/img/yopo/mobileMenu.webp',
  'src/assets/img/yopo/mobileOrder.webp',
  'src/assets/img/yopo/mobileContact.webp',
  'src/assets/img/yopo/yopoMobileMain.webp',
];

const mobileAltText = [
  'The Yopo Sweet Mandarin mobile home page',
  'The Yopo Sweet Mandarin mobile menu page',
  'The Yopo Sweet Mandarin mobile order page',
  'The Yopo Sweet Mandarin mobile contact page',
  'The Yopo Sweet Mandarin mobile home page',
];

// Parallax hero logo

window.addEventListener('scroll', () => {
  const dist = window.scrollY;
  if (dist <= window.innerHeight) {
    heroText.style.transform = `translateY(${dist * -0.5}px)`;
  }
});

// Determine whether to show mobile or desktop layout for final design
var curImg = 0;

//Click to change photos

fauxBrowser.addEventListener('click', () => {
  if (curImg < 4) {
    curImg = curImg + 1;
    desktopImg.src = desktopImgArray[curImg];
    desktopImg.alt = desktopAltText[curImg];
    mobileImg.src = mobileImgArray[curImg];
    mobileImg.alt = mobileAltText[curImg];
  }
  if (curImg === 4) {
    curImg = 0;
  }
});
