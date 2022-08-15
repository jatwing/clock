const topAppBar = document.querySelector("#top-app-bar");
const fullscreen = document.querySelector("#fullscreen");
const clock = document.querySelector("#clock");

const demandFullscreen = () => {
  if (document.fullscreenEnabled) {
    clock.requestFullscreen();
  }
  topAppBar.classList.add("hidden");
};

const quitFullscreen = () => {
  if (document.fullscreenEnabled && document.fullscreenElement) {
    document.exitFullscreen();
  }
  topAppBar.classList.remove("hidden");
};

const changeFullscreen = () => {
  if (!document.fullscreenElement) {
    topAppBar.classList.remove("hidden");
  }
};

fullscreen.addEventListener("click", demandFullscreen, false);
clock.addEventListener("click", quitFullscreen, false);
clock.addEventListener("fullscreenchange", changeFullscreen);
