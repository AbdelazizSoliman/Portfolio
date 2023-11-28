$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dot',
    dotsClass: 'dots'
  });

  gsap.to(".stretch-text", {
    scaleX: 1.5,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power1.inOut"
  });
});

const $circle = $('.circle');

function moveCircle(e) {
  $circle.css({
    left: e.pageX,
    top: e.pageY
  });
}

$(window).on('mousemove', moveCircle);

const hamburger = document.querySelector('.hamberger-button');
const times = document.querySelector('.times');
const mobileNav = document.querySelector('.mobile-nav');
const clickElements = document.querySelectorAll('.click, .click-1, .click-2, .click-3');

hamburger.addEventListener('click', function () {
  mobileNav.classList.add('open');
});

times.addEventListener('click', closeMobileNav);
clickElements.forEach(element => element.addEventListener('click', closeMobileNav));

function closeMobileNav() {
  mobileNav.classList.remove('open');
}
