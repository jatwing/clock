const getTwoDigitTime = (date) => {
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  const second = ("0" + date.getSeconds()).slice(-2);
  return { hour, minute, second };
};

const setFlapDisplay = (flapDisplayId, newValue, oldValue) => {
  const flapBackTop = document.querySelector(
    `#${flapDisplayId} .flap.back-top`
  );
  const flapFrontTop = document.querySelector(
    `#${flapDisplayId} .flap.front-top`
  );
  const flapFrontBottom = document.querySelector(
    `#${flapDisplayId} .flap.front-bottom`
  );
  const flapBackBottom = document.querySelector(
    `#${flapDisplayId} .flap.back-bottom`
  );
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

const showTime = () => {
  const now = getTwoDigitTime(new Date());
  const oneSecondAgo = getTwoDigitTime(new Date(new Date().getTime() - 1000));
  setFlapDisplay("hour", now.hour, oneSecondAgo.hour);
  setFlapDisplay("minute", now.minute, oneSecondAgo.minute);
  // setFlapDisplay("second", now.second, oneSecondAgo.second);
};

showTime();
const interval = setInterval(showTime, 1000);
