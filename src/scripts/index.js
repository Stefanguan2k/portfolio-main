const workCards = document.querySelectorAll(".card");

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

window.addEventListener("resize", () => {
  throttle(disableAnim, 100);
});

var timeOut;
var delay = 100; //in ms

function disableAnim() {
  for (let i = 0; i < workCards.length; ++i) {
    workCards[i].classList.add('disable-anim');
  }
  clearTimeout(timeOut);
  timeOut = setTimeout(applyAnim, delay);
}

// Remove disable animation class

function applyAnim() {
  for (let i = 0; i < workCards.length; ++i) {
    workCards[i].classList.remove('disable-anim');
  }
}
