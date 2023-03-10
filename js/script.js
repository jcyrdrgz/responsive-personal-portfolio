
// document.addEventListener("DOMContentLoaded", () => {
console.log("Hello World!");

var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bxs-x-circle')
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 10;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /*====navigation bar====*/


  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bxs-x-circle')
  navbar.classList.remove('active');
};




ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.header, .home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
  strings: ['a Front end Developer', 'an IT Expert'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
// });



// Light Mode toggle 

var icon = document.getElementById("icon");

  icon.onclick = function() {
  document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme"))
    {
      icon.src="images/moon.png";
    }
    else {
      icon.src="images/sun.png";
    }
}