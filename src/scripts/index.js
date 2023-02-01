const work1 = document.getElementById("work-1");
const work2 = document.getElementById("work-2");
const work3 = document.getElementById("work-3");

//  Works card 1
work1.addEventListener("click", () => {
  window.location.href = "/munch.html";
});

work2.addEventListener("click", () => {
  window.location.href = "/yopo.html";
});

var timeOut;
var delay = 100; //in ms

window.addEventListener("resize", () => {
  work1.classList.add("disable-anim");
  work2.classList.add("disable-anim");
  clearTimeout(timeOut);
  timeOut = setTimeout(applyAnim, delay);
});

// Remove disable animation class

function applyAnim() {
  work1.classList.remove("disable-anim");
  work2.classList.remove("disable-anim");
}
