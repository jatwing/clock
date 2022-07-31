const setDigit = (flapDisplayId, newValue, oldValue) => {
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
  const now = new Date();
  const currentHourFirstDigit = Math.floor(now.getHours() / 10);
  const currentHourSecondDigit = now.getHours() % 10;
  const currentMinuteFirstDigit = Math.floor(now.getMinutes() / 10);
  const currentMinuteSecondDigit = now.getMinutes() % 10;
  const currentSecondFirstDigit = Math.floor(now.getSeconds() / 10);
  const currentSecondSecondDigit = now.getSeconds() % 10;
  const oneSecondAgo = new Date(new Date().getTime() - 1000);
  const recentHourFirstDigit = Math.floor(oneSecondAgo.getHours() / 10);
  const recentHourSecondDigit = oneSecondAgo.getHours() % 10;
  const recentMinuteFirstDigit = Math.floor(oneSecondAgo.getMinutes() / 10);
  const recentMinuteSecondDigit = oneSecondAgo.getMinutes() % 10;
  const recentSecondFirstDigit = Math.floor(oneSecondAgo.getSeconds() / 10);
  const recentSecondSecondDigit = oneSecondAgo.getSeconds() % 10;
  setDigit("hour-first-digit", currentHourFirstDigit, recentHourFirstDigit);
  setDigit("hour-second-digit", currentHourSecondDigit, recentHourSecondDigit);
  setDigit(
    "minute-first-digit",
    currentMinuteFirstDigit,
    recentMinuteFirstDigit
  );
  setDigit(
    "minute-second-digit",
    currentMinuteSecondDigit,
    recentMinuteSecondDigit
  );
  setDigit(
    "second-first-digit",
    currentSecondFirstDigit,
    recentSecondFirstDigit
  );
  setDigit(
    "second-second-digit",
    currentSecondSecondDigit,
    recentSecondSecondDigit
  );
};

const interval = setInterval(showTime, 1000);
