
// Show the loading animation
function showLoadingAnimation() {
  var loadingContainer = document.getElementById('loading-container');
  loadingContainer.style.display = 'flex';
}

// Hide the loading animation
function hideLoadingAnimation() {
  var loadingContainer = document.getElementById('loading-container');
  loadingContainer.style.display = 'none';
}

// Trigger the loading animation when the webpage starts loading
window.addEventListener('load', () => {
    hideLoadingAnimation();
  });


// Add bg to Navbar on scroll

let nav = document.querySelector('.navbar');

window.onscroll = function() {
  if (window.scrollY > 0) {
    nav.classList.add('nav-bg');
  }
  else {
    nav.classList.remove('nav-bg');
  }
}

// Change Navbar style According to screen size
let rightNav = document.querySelector('.right-nav');
let btn = document.querySelector('.nav-btn');

function sideNav() {
  rightNav.classList.toggle('opacity');
}

// Activate side Nav on click
btn.addEventListener('click', sideNav);


// Functions for Buttons
function scrollToSection(id) {
  let section = document.querySelector(id);
  if (section) {
    setTimeout(function() {
      section.scrollIntoView({ behavior: 'smooth' });
    }, 100);   
  }
}
