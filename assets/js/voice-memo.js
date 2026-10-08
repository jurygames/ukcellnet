const memoAudio = document.querySelector('#voice-memo-audio');
const memoIconButton = document.querySelector('.voice-icon-button');

memoIconButton.addEventListener('click', () => {
  if (memoAudio.paused) {
    memoAudio.play();
  } else {
    memoAudio.pause();
  }
});

memoAudio.addEventListener('play', () => memoIconButton.setAttribute('aria-label', 'Pause voice memo'));
memoAudio.addEventListener('pause', () => memoIconButton.setAttribute('aria-label', 'Play voice memo'));
