const email = document.getElementById('#email');
const form = document.querySelector('#mobile-form');

const errorMessage = document.querySelector('.error-message');

const validateEmail = (e) => {
  const emailInput = email.value;
  if (emailInput.toLowerCase() !== emailInput) {
    e.preventDefault();
    errorMessage.innerText = 'Error: Please type your email address in a lower case ';
  } else {
    errorMessage.style.display = 'none';
  }
};

form.addEventListener('submit', validateEmail);