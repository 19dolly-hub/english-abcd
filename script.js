
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

function addBg() {
  console.log('scroll detected');
  nav.classList.add('nav-bg');
} 

let el = document;

if (el) {
  // console.log('document found');
  el.addEventListener('scroll', addBg);
} else {
  console.error('Document element not found');
}

// Change Navbar style According to screen size
let rightNav = document.querySelector('.right-nav');

function sideNav() {
  // console.log('click detected');
  rightNav.classList.toggle('opacity');
}

// Activate side Nav on click
let btn = document.querySelector('.nav-btn');

if (btn) {
  console.log('button found');
  btn.addEventListener('click', sideNav);
} else {
  console.error('button not found');
}

<<<<<<< HEAD
// Functions for Buttons
=======
// function for buttons

>>>>>>> ff0054549aac87a47640e9dbe8df497b6349e468
function scrollToSection(id) {
  let section = document.querySelector(id);
  if (section) {
     setTimeout(function() {
       section.scrollIntoView({ behavior: 'smooth' });
     }, 100);   }
}
