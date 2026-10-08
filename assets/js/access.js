const form = document.querySelector('.access-form');
const input = document.querySelector('#access-code');
const error = document.querySelector('.access-error');
const prompt = document.querySelector('#access-prompt');
const result = document.querySelector('.access-result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value === '417892') {
    prompt.hidden = true;
    result.hidden = false;
    result.querySelector('a').focus();
    return;
  }
  error.hidden = false;
  input.select();
});
