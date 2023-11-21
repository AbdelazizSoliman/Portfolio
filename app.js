$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dot',
        dotsClass: 'dots'
    })
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
  