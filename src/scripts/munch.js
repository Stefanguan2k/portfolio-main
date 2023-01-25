const heroText = document.querySelector(".main-text");
const personaCards = document.querySelectorAll(".persona");
const personaGap = 125;

// Parallax hero text

window.addEventListener("scroll", () => {
    const dist = window.scrollY;
    heroText.style.transform = 
        `translateY(${dist * -0.5}px)`;
});

// Persona carousel

personaCards.forEach((personaCard, indx) => {
    personaCard.style.transform = `translateX(${indx * personaGap}%)`;
});

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
    } else {
        curCard++;
    }
    personaCards.forEach((personaCard, index) => {
        personaCard.style.transform = `translateX(${personaGap * (index - curCard)}%)`;
    });
});

// Back button functionality
prevBtn.addEventListener("click", function () {
    if (curCard === 0) {
        curCard = maxCard;
    } else {
        curCard--;
    }
    personaCards.forEach((personaCard, index) => {
        personaCard.style.transform = `translateX(${personaGap * (index - curCard)}%)`;
    });
})