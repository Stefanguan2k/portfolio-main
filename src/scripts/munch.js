const heroText = document.querySelector(".main-text");
const personaCards = document.querySelectorAll(".persona");
const personaGap = 101;
const cardIndicator1 = document.querySelector(".card-ct1");
const cardIndicator2 = document.querySelector(".card-ct2");

// Parallax hero text

window.addEventListener("scroll", () => {
  const dist = window.scrollY;
  heroText.style.transform = `translateY(${dist * -0.5}px)`;
});

// Persona carousel

document.onload = togglePersonaCarousel();
window.addEventListener("resize", togglePersonaCarousel);

function togglePersonaCarousel() {
  if (window.innerWidth <= 768) {
    personaCards.forEach((personaCard, indx) => {
      personaCard.style.transform = `translateX(${indx * personaGap}%)`;
      cardIndicator1.classList.add("current-cnt");
      cardIndicator2.classList.remove("current-cnt");
    });
  } else {
    personaCards.forEach((personaCard) => {
      personaCard.style.removeProperty("transform");
    });
  }
}

// Current card
let curCard = 0;
// Max card count
let maxCard = personaCards.length - 1;

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// Next button functionality
nextBtn.addEventListener("click", function () {
  if (curCard === maxCard) {
    curCard = 0;
    cardIndicator1.classList.add("current-cnt");
    cardIndicator2.classList.remove("current-cnt");
  } else {
    curCard++;
    cardIndicator1.classList.remove("current-cnt");
    cardIndicator2.classList.add("current-cnt");
  }
  personaCards.forEach((personaCard, index) => {
    personaCard.style.transform = `translateX(${
      personaGap * (index - curCard)
    }%)`;
  });
});

// Back button functionality
prevBtn.addEventListener("click", function () {
  if (curCard === 0) {
    curCard = maxCard;
    cardIndicator1.classList.remove("current-cnt");
    cardIndicator2.classList.add("current-cnt");
  } else {
    curCard--;
    cardIndicator1.classList.add("current-cnt");
    cardIndicator2.classList.remove("current-cnt");
  }
  personaCards.forEach((personaCard, index) => {
    personaCard.style.transform = `translateX(${
      personaGap * (index - curCard)
    }%)`;
  });
});

// Figma prototype
const figmaBtn = document.querySelector(".figma-btn");
const figmaOverlay = document.querySelector(".figma-overlay");
const figma = document.querySelector(".figma");
const closeFigmaBtn = document.querySelector(".close-figma");

figmaBtn.addEventListener("click", () => {
  figmaOverlay.setAttribute("data-active", true);
  setTimeout(() => {
    figmaOverlay.style.opacity = 1;
  }, 200);
});

closeFigmaBtn.addEventListener("click", () => {
  figmaOverlay.style.opacity = 0;
  setTimeout(() => {
    figmaOverlay.setAttribute("data-active", false);
  }, 500);
});
