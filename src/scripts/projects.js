const state = {};
const carouselList = document.querySelector('.carousel-list');
const carouselItems = document.querySelectorAll('.list-item');
const elems = Array.from(carouselItems);
const projTitle = document.querySelector('.project-title');
const projDesc = document.querySelector('.project-descript');
const numerator = document.querySelector('.numerator');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');

window.onload = () => {
  setTimeout(() => {
    carouselItems.forEach((elem) => elem.classList.remove('disable-anim'));
    document.body.classList.remove('disable-anim');
  }, 250);
};

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.list-item');
  if (!isItem) {
    return;
  }

  checkActive(newActive);
  redirect(newActive);
  update(newActive);
});

//Redirect user to respective page

const redirect = function (newActive) {
  if (newActive.getAttribute('data-pos') === '0') {
    if (newActive.getAttribute('data-card') === 'munch') {
      window.location.href = '/munch.html';
    }
    if (newActive.getAttribute('data-card') === 'yopo') {
      window.location.href = '/yopo.html';
    }
    if (newActive.getAttribute('data-card') === 'oasis') {
      window.location.href = 'src/assets/Oasis-slide-deck.pdf';
    } else {
      return;
    }
  }
};

// Check which card is active and modify respective HTML elements
const checkActive = function (newActive) {
  if (newActive.getAttribute('data-card') === 'munch') {
    projTitle.innerHTML = 'Munch';
    projDesc.innerHTML = 'A Google UX Design Certificate Project';
    numerator.innerHTML = '01';
    document.body.style.background = 'rgb(70, 80, 84)';
  }

  if (newActive.getAttribute('data-card') === 'oasis') {
    projTitle.innerHTML = 'Oasis';
    projDesc.innerHTML = 'A Google UX Responsive Web Project';
    numerator.innerHTML = '03';
    document.body.style.background = '#3a2d40';
  }

  if (newActive.getAttribute('data-card') === 'yopo') {
    projTitle.innerHTML = 'Yopo';
    projDesc.innerHTML = 'A website overhaul project';
    numerator.innerHTML = '02';
    document.body.style.background = '#474743';
  }
};

var idx = 0;

carouselList.addEventListener('mousewheel', (e) => {
  var e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  e.preventDefault();
  debounce(determineIndex(delta));
});

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

// Previous and Next button functionality
nextBtn.addEventListener('click', () => {
  determineIndex(2);
});

prevBtn.addEventListener('click', () => {
  determineIndex(1);
});

// Determine the index corresponding to input (1 = previous, 2 = next)

const determineIndex = function (delta) {
  if (delta === 1) {
    if (idx === 0) {
      idx = 2;
    } else {
      idx = idx - 1;
    }
  }
  //   Mousewheel down
  else {
    if (idx === 2) {
      idx = 0;
    } else {
      idx = idx + 1;
    }
  }
  update(elems[idx]);
  checkActive(elems[idx]);
};

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;
  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);

  [current, prev, next].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 1) {
    return -current;
  }
  return diff;
};
