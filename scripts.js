const hamburger = document.getElementById('hamburger');
const navbg = document.querySelector('.nav-bg');
const navItems = document.querySelector('.nav-items');
const homeBtn = document.querySelector('.main-icon');
const container = document.querySelector('.content-container');
const footerLine = document.querySelector('.footer-container');
const linkedinBtn = document.querySelector('.linkedin-btn');
const githubBtn = document.querySelector('.github-btn');

// window.onload = () => {
//     setTimeout(() => {
//         container.setAttribute('data-loaded', 'true')
//     }, 1000);
// }

// 
// Listen for hover
// 

linkedinBtn.addEventListener("mouseover", () => {
    footerLine.setAttribute('data-icon', 'linkedin');
})

linkedinBtn.addEventListener("mouseout", () => {
    footerLine.setAttribute('data-icon', 'none');
})

githubBtn.addEventListener('mouseover', () => {
    footerLine.setAttribute('data-icon', 'github');
})

githubBtn.addEventListener("mouseout", () => {
    footerLine.setAttribute('data-icon', 'none');
})

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

// Resize navbar height and close mobile nav menu
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navbg.setAttribute('data-active', false);
        navItems.setAttribute('data-active', false);
    };
});

