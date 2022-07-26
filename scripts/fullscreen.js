const demandFullscreen = (element) => {
  if (
    document.fullscreenElement
    || document.mozFullScreenElement
    || document.msFullscreenElement
    || document.webkitFullscreenElement
  ) {
    return null;
  }
  if (element.requestFullscreen) {
    element.requestFullscreen();
    return true;
  }
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
    return true;
  }
  if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
    return true;
  }
  if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    return true;
  }
  return false;
};

const quitFullscreen = () => {
  if (
    !document.fullscreenElement
    && !document.mozFullScreenElement
    && !document.msFullscreenElement
    && !document.webkitFullscreenElement
  ) {
    return null;
  }
  if (document.exitFullscreen) {
    document.exitFullscreen();
    return true;
  }
  if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    return true;
  }
  if (document.msExitFullscreen) {
    document.msExitFullscreen();
    return true;
  }
  if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    return true;
  }
  return false;
};

const header = document.querySelector('.header');
const fullscreen = document.querySelector('.header__link:nth-last-child(1)');
const clock = document.querySelector('.clock');

fullscreen.addEventListener('click', () => {
  if (demandFullscreen(clock) !== false) {
    return;
  }
  header.classList.add('header--hidden');
});

clock.addEventListener('click', () => {
  /** why ? null false should use fallback solution * */
  if (quitFullscreen() === true) {
    return;
  }
  header.classList.remove('header--hidden');
});
