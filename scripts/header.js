const changeColor = () => {
  const header = document.querySelector(".header");
  const clock = document.querySelector(".clock");
  if (header.classList.contains("header--red")) {
    header.classList.remove("header--red");
    clock.classList.remove("clock--red");
    return;
  }
  header.classList.add("header--red");
  clock.classList.add("clock--red");
};

const demandFullscreen = (element) => {
  if (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement ||
    document.webkitFullscreenElement
  ) {
    return;
  }
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
};

const quitFullscreen = () => {
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.msFullscreenElement &&
    !document.webkitFullscreenElement
  ) {
    return;
  }
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

const palette = document.querySelector("#palette");
const fullscreen = document.querySelector("#fullscreen");
const clock = document.querySelector(".clock");

palette.addEventListener("click", () => changeColor());
fullscreen.addEventListener("click", () => demandFullscreen(clock));
clock.addEventListener("click", () => quitFullscreen());
