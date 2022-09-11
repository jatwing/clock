const changeColor = () => {
  const page = document.querySelector("#page");
  if (page.classList.contains('page--red')) {
    page.classList.remove('page--red');
    return;
  }
  page.classList.add('page--red');
};

const demandFullscreen = (element) => {
  if (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement ||
    document.webkitFullscreenElement
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
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.msFullscreenElement &&
    !document.webkitFullscreenElement
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

const header = document.querySelector("#header");
const palette = document.querySelector("#palette");
const fullscreen = document.querySelector("#fullscreen");
const clock = document.querySelector("#clock");

palette.addEventListener("click", () => changeColor());

fullscreen.addEventListener("click", () => {
  if (demandFullscreen(clock) !== false) {
    return;
  }
  header.classList.add("header--hidden");
});

clock.addEventListener("click", () => {
  if (quitFullscreen() !== false) {
    return;
  }
  header.classList.remove("header--hidden");
});
