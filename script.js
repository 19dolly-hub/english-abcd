
// adding bg to navbar on scroll

let nav = document.querySelector('.navbar');

function addBg() {
  console.log('scroll detected');
  nav.classList.add('nav-bg');
} 

let el = document;

if (el) {
  console.log('document found');
  el.addEventListener('scroll', addBg);
} else {
  console.error('Document element not found');
}

// changing navbar style according to screen size

let rightNav = document.querySelector('.right-nav');

function sideNav() {
  console.log('click detected');
  rightNav.classList.toggle('opacity');
}

// activating side nav on click

let btn = document.querySelector('.nav-btn');

if (btn) {
  console.log('button found');
  btn.addEventListener('click', sideNav);
} else {
  console.error('button not found');
}

// functions for buttons

function scrollToAbout() {
  let section = document.getElementById("the-about");
  let sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth"
  });
}

function scrollToContact() {
  let section = document.getElementById("the-contact");
  let sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth"
  });
}
