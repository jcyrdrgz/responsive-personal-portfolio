const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const icon = document.getElementById('icon');
const loader = document.getElementById('preloader');

// window.addEventListener("load", () => {
//   setTimeout(function() {
//     loader.style.display = "none";
// },500)});

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bxs-x-circle');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  const top = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 10;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove('active'));
      document
        .querySelector(`header nav a[href*=${id}]`)
        .classList.add('active');
    }
  });

  header.classList.toggle('sticky', top > 100);
  menuIcon.classList.remove('bxs-x-circle');
  navbar.classList.remove('active');
};

ScrollReveal({
  distance: '100px',
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal('.header, .home-content p, .home-content, .heading', {
  origin: 'top',
});
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, .contact',
  { origin: 'bottom' }
);
ScrollReveal().reveal(
  '.home-content h1, .about-content, .about-img, .experience, .techstack',
  {
    origin: 'left',
  }
);
// ScrollReveal().reveal('.home-content p, .about-content, .techstack', {
//   origin: 'right',
// });

const typed = new Typed('.multiple-text', {
  strings: ['a Web Developer', 'a Software Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

icon.onclick = function () {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    icon.src = 'images/moon.png';
  } else {
    icon.src = 'images/sun.png';
  }
};
