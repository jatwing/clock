const handleClickFullscreen = () => {
  console.log("request");
  const clock = document.querySelector('#clock');
  clock.requestFullscreen();
};

const handleClickFullscreenExit = () => {
  console.log("exit");
};


const fullscreen = document.querySelector('#fullscreen');
const fullscreenExit = document.querySelector('#fullscreen-exit');

fullscreen.addEventListener('click', handleClickFullscreen, false);
fullscreenExit.addEventListener('click', handleClickFullscreenExit, false);


