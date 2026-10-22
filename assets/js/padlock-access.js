const form = document.querySelector('.archive-access-form');
const input = document.querySelector('#archive-password');
const prompt = document.querySelector('.archive-prompt');
const unlocked = document.querySelector('.archive-unlocked');
const error = document.querySelector('.archive-error');
const archiveId = document.body.dataset.archive;
const passwordHash = document.body.dataset.passwordHash;

async function digest(value) {
  const bytes = new TextEncoder().encode(value);
  const buffer = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function showUnlocked() {
  prompt.hidden = true;
  unlocked.hidden = false;
  unlocked.querySelector('[tabindex="-1"]').focus();
}

if (sessionStorage.getItem(`ukcellnet-archive-${archiveId}`) === 'unlocked') showUnlocked();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (await digest(input.value) === passwordHash) {
    sessionStorage.setItem(`ukcellnet-archive-${archiveId}`, 'unlocked');
    showUnlocked();
    return;
  }
  error.hidden = false;
  input.select();
});
