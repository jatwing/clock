const getTwoDigitTime = (date) => {
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  const second = ("0" + date.getSeconds()).slice(-2);
  return { hour, minute, second };
};

const setFlapDisplay = (id, newValue, oldValue) => {
  const flapBackTop = document.querySelector(`#${id} .flap.back-top`);
  const flapFrontTop = document.querySelector(`#${id} .flap.front-top`);
  const flapFrontBottom = document.querySelector(`#${id} .flap.front-bottom`);
  const flapBackBottom = document.querySelector(`#${id} .flap.back-bottom`);
  flapBackTop.textContent = newValue;
  flapFrontTop.textContent = oldValue;
  flapFrontBottom.textContent = oldValue;
  flapBackBottom.textContent = newValue;
  if (newValue === oldValue) {
    return;
  }
  flapFrontTop.classList.add("animating");
  flapFrontTop.addEventListener("animationend", () => {
    flapFrontTop.classList.remove("animating");
    flapFrontTop.textContent = newValue;
    flapFrontBottom.textContent = newValue;
  });
  flapBackBottom.classList.add("animating");
  flapBackBottom.addEventListener("animationend", () =>
    flapBackBottom.classList.remove("animating")
  );
};

const setTime = () => {
  const now = getTwoDigitTime(new Date());
  setFlapDisplay("hour", now.hour, now.hour);
  setFlapDisplay("minute", now.minute, now.minute);
};

const updateTime = () => {
  const now = getTwoDigitTime(new Date());
  const oneSecondAgo = getTwoDigitTime(new Date(new Date().getTime() - 1000));
  if (now.hour != oneSecondAgo.hour) {
    setFlapDisplay("hour", now.hour, oneSecondAgo.hour);
  }
  if (now.minute != oneSecondAgo.minute) {
    setFlapDisplay("minute", now.minute, oneSecondAgo.minute);
  }
};

setTime();
const interval = setInterval(updateTime, 1000);
