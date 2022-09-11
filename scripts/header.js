const header = document.querySelector(".header");
const palette = document.querySelector('#palette');
const fullscreen = document.querySelector("#fullscreen");
const clock = document.querySelector(".clock");

const changeColor = () => {
  if (header.classList.contains('header--red')) {
    header.classList.remove('header--red');
    clock.classList.remove('clock--red');
    return;
  } 
  header.classList.add('header--red');
  clock.classList.add('clock--red');
};

const demandFullscreen = () => {
  if (document.fullscreenEnabled) {
    clock.requestFullscreen();
  }
  header.classList.add("header--hidden");
};

const quitFullscreen = () => {
  if (document.fullscreenEnabled && document.fullscreenElement) {
    document.exitFullscreen();
  }
  header.classList.remove("header--hidden");
};

const changeFullscreen = () => {
  if (!document.fullscreenElement) {
    header.classList.remove("header--hidden");
  }
};

palette.addEventListener("click", changeColor, false);
fullscreen.addEventListener("click", demandFullscreen, false);
clock.addEventListener("click", quitFullscreen, false);
clock.addEventListener("fullscreenchange", changeFullscreen);
