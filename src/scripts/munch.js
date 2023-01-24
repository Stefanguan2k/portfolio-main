const heroText = document.querySelector(".main-text");

window.addEventListener("scroll", () => {
    const dist = window.scrollY;
    heroText.style.transform = 
        `translateY(${dist * -0.5}px)`;
});