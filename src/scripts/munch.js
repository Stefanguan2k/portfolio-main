const heroText = document.querySelector('.title');
const personaCards = document.querySelectorAll('.persona');
const personaGap = 101;
const cardIndicator1 = document.querySelector('.card-ct1');
const cardIndicator2 = document.querySelector('.card-ct2');

// Parallax hero logo

window.addEventListener('scroll', () => {
  const dist = window.scrollY;
  if (dist <= window.innerHeight) {
    heroText.style.transform = `translateY(${dist * -0.5}px)`;
  }
});

// Persona carousel

// Throttle to improve resize performance

let throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

document.onload = togglePersonaCarousel();
window.addEventListener('resize', () => {
  throttle(togglePersonaCarousel, 250);
});

function togglePersonaCarousel() {
  if (window.innerWidth <= 768) {
    personaCards.forEach((personaCard, indx) => {
      personaCard.style.transform = `translateX(${indx * personaGap}%)`;
      cardIndicator1.classList.add('current-cnt');
      cardIndicator2.classList.remove('current-cnt');
    });
  } else {
    personaCards.forEach((personaCard) => {
      personaCard.style.removeProperty('transform');
    });
  }
}

// Current card
let curCard = 0;
// Max card count
let maxCard = personaCards.length - 1;

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Next button functionality
nextBtn.addEventListener('click', function () {
  if (curCard === maxCard) {
    curCard = 0;
    cardIndicator1.classList.add('current-cnt');
    cardIndicator2.classList.remove('current-cnt');
  } else {
    curCard++;
    cardIndicator1.classList.remove('current-cnt');
    cardIndicator2.classList.add('current-cnt');
  }
  personaCards.forEach((personaCard, index) => {
    personaCard.style.transform = `translateX(${
      personaGap * (index - curCard)
    }%)`;
  });
});

// Back button functionality
prevBtn.addEventListener('click', function () {
  if (curCard === 0) {
    curCard = maxCard;
    cardIndicator1.classList.remove('current-cnt');
    cardIndicator2.classList.add('current-cnt');
  } else {
    curCard--;
    cardIndicator1.classList.add('current-cnt');
    cardIndicator2.classList.remove('current-cnt');
  }
  personaCards.forEach((personaCard, index) => {
    personaCard.style.transform = `translateX(${
      personaGap * (index - curCard)
    }%)`;
  });
});

const finalImg = document.getElementById('final-img');
const darkBtn = document.getElementById('dark-btn');
const finalImgWrapper = document.getElementById('final-img-wrapper');

darkBtn.addEventListener('click', () => {
  if (darkBtn.getAttribute('data-dark') === 'false') {
    darkBtn.setAttribute('data-dark', true);
    finalImg.src = '/src/assets/img/munch/munchfinal2dm.jpg';
    darkBtn.innerHTML = `Light Version
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M505.2 324.8l-47.73-68.78l47.75-68.81c7.359-10.62 8.797-24.12 3.844-36.06c-4.969-11.94-15.52-20.44-28.22-22.72l-82.39-14.88l-14.89-82.41c-2.281-12.72-10.76-23.25-22.69-28.22c-11.97-4.936-25.42-3.498-36.12 3.844L256 54.49L187.2 6.709C176.5-.6016 163.1-2.039 151.1 2.896c-11.92 4.971-20.4 15.5-22.7 28.19l-14.89 82.44L31.15 128.4C18.42 130.7 7.854 139.2 2.9 151.2C-2.051 163.1-.5996 176.6 6.775 187.2l47.73 68.78l-47.75 68.81c-7.359 10.62-8.795 24.12-3.844 36.06c4.969 11.94 15.52 20.44 28.22 22.72l82.39 14.88l14.89 82.41c2.297 12.72 10.78 23.25 22.7 28.22c11.95 4.906 25.44 3.531 36.09-3.844L256 457.5l68.83 47.78C331.3 509.7 338.8 512 346.3 512c4.906 0 9.859-.9687 14.56-2.906c11.92-4.969 20.4-15.5 22.7-28.19l14.89-82.44l82.37-14.88c12.73-2.281 23.3-10.78 28.25-22.75C514.1 348.9 512.6 335.4 505.2 324.8zM456.8 339.2l-99.61 18l-18 99.63L256 399.1L172.8 456.8l-18-99.63l-99.61-18L112.9 255.1L55.23 172.8l99.61-18l18-99.63L256 112.9l83.15-57.75l18.02 99.66l99.61 18L399.1 255.1L456.8 339.2zM256 143.1c-61.85 0-111.1 50.14-111.1 111.1c0 61.85 50.15 111.1 111.1 111.1s111.1-50.14 111.1-111.1C367.1 194.1 317.8 143.1 256 143.1zM256 319.1c-35.28 0-63.99-28.71-63.99-63.99S220.7 192 256 192s63.99 28.71 63.99 63.1S291.3 319.1 256 319.1z"/></svg>`;
  } else {
    darkBtn.setAttribute('data-dark', false);
    finalImg.src = '/src/assets/img/munch/munchfinal2.jpg';
    darkBtn.innerHTML = `Dark Version
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
  }
});
