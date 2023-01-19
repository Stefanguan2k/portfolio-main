const hamburger = document.getElementById('hamburger');
const navbg = document.querySelector('.nav-bg');
const navItems = document.querySelector('.nav-items');
const homeBtn = document.querySelector('.main-icon');
const work1 = document.getElementById('work-1');
const work2 = document.getElementById('work-2');
const work3 = document.getElementById('work-3');
const container = document.querySelector('.content-container');

// window.onload = () => {
//     setTimeout(() => {
//         container.setAttribute('data-loaded', 'true')
//     }, 1000);
// }

// 
// Listen for button clicks
// 

// Mobile hamburger button
hamburger.addEventListener("click", () => {
    if (navbg.getAttribute('data-active') === 'false') {
        navbg.setAttribute('data-active', true);
        navItems.setAttribute('data-active', true);
    }
    else {
        navbg.setAttribute('data-active', false);
        navItems.setAttribute('data-active', false);
    }
});

// Logo button
homeBtn.addEventListener('click', () => {
    window.location.href = "/index.html"
});

//  Works card 1
work1.addEventListener("click", () =>
{
    window.location.href = "/yopo.html"
});

work2.addEventListener("click", () =>
{
    window.location.href = "/munch.html"
});