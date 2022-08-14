const topAppBar = document.querySelector("#top-app-bar");
const fullscreen = document.querySelector("#fullscreen");
const clock = document.querySelector("#clock");

const handleClickFullscreen = () => {
  topAppBar.classList.add("hidden");
  clock.requestFullscreen();
};

const handleTransitionEnd = (event) => {
  if (!event.target.classList.contains("hidden")) {
    return;
  }
  topAppBar.classList.add("absolute");
};

const handleClickClock = () => {
  topAppBar.classList.remove("absolute");
  topAppBar.classList.remove("hidden");
  if (!document.fullscreenElement) {
    return;
  }
  document.exitFullscreen();
};

topAppBar.addEventListener("transitionend", handleTransitionEnd);
fullscreen.addEventListener("click", handleClickFullscreen, false);
clock.addEventListener("click", handleClickClock, false);
