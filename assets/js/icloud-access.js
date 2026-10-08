const signInForm = document.querySelector('.icloud-form');
const passwordField = document.querySelector('#icloud-password');
const signInError = document.querySelector('.icloud-error');

signInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (passwordField.value === 'CHELSEA') {
    window.location.href = '../copy-of-localised-data-storage-uplo/';
    return;
  }
  signInError.hidden = false;
  passwordField.select();
});
