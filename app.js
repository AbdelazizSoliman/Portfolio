$(document).ready(function(){
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

    humberger.addEventListener('click', function(){
      mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
      mobileNav.classList.remove('open');
    });

    click.addEventListener('click', function(){
      mobileNav.classList.remove('open');
    });
    click1.addEventListener('click', function(){
      mobileNav.classList.remove('open');
    });
    click2.addEventListener('click', function(){
      mobileNav.classList.remove('open');
    });
    click3.addEventListener('click', function(){
      mobileNav.classList.remove('open');
    });

});

// Form Validation
const form = document.querySelector('.form-input');
const email = document.getElementById('email');

// Error Mesaage for Invalid email
const setError = (message) => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = message;
};

// Success Mesaage for Valid email
const setSuccess = (message) => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = message;
};
const validateInputs = (e) => {
    const emailValue = email.value.trim();
  
    if (emailValue === '') {
      setError('Email is required');
      e.preventDefault();
    } else if (emailValue.toLowerCase() !== emailValue) {
      setError('email should be in lowercase. Please resubmit again');
      e.preventDefault();
    } else {
      setSuccess('Data sent Successfully');
    }
  };
  
  form.addEventListener('submit', (e) => {
    validateInputs(e);
  });
  

