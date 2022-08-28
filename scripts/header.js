const header = document.querySelector(".header");
const fullscreen = document.querySelector("#fullscreen");
const clock = document.querySelector(".clock");

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

fullscreen.addEventListener("click", demandFullscreen, false);
clock.addEventListener("click", quitFullscreen, false);
clock.addEventListener("fullscreenchange", changeFullscreen);
