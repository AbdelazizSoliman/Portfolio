$(document).ready(function () {
  var $circle = $('.circle');

  function moveCircle(e) {
    $circle.css({
        left: e.pageX,
        top: e.pageY
    });
}

  $(window).on('mousemove', moveCircle);

  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dot',
    dotsClass: 'dots'
  });

  let humberger = document.querySelector('.hamberger-button');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');
  let click = document.querySelector('.click');
  let click1 = document.querySelector('.click-1');
  let click2 = document.querySelector('.click-2');
  let click3 = document.querySelector('.click-3');

  humberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
  });

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });

  click.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });
  click1.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });
  click2.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });
  click3.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });
});
