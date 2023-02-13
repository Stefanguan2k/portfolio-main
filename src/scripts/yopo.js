const heroText = document.querySelector(".title");

// Parallax hero logo

window.addEventListener("scroll", () => {
  const dist = window.scrollY;
  heroText.style.transform = `translateY(${dist * -0.5}px)`;
});
