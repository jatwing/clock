const getTwoDigitTime = (date) => {
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  const second = ("0" + date.getSeconds()).slice(-2);
  return { hour, minute, second };
};

const setFlapDisplay = (id, newValue, oldValue) => {
  const topTightFlap = document.querySelector(
    `#${id} .display__top-tight-flap`
  );
  const topLooseFlap = document.querySelector(
    `#${id} .display__top-loose-flap`
  );
  const bottomTightFlap = document.querySelector(
    `#${id} .display__bottom-tight-flap`
  );
  const bottomLooseFlap = document.querySelector(
    `#${id} .display__bottom-loose-flap`
  );
  topTightFlap.textContent = newValue;
  topLooseFlap.textContent = oldValue;
  bottomTightFlap.textContent = oldValue;
  bottomLooseFlap.textContent = newValue;
  if (newValue === oldValue) {
    return;
  }
  topLooseFlap.classList.add("display__top-loose-flap--flipping");
  topLooseFlap.addEventListener("animationend", () => {
    topLooseFlap.classList.remove("display__top-loose-flap--flipping");
    topLooseFlap.textContent = newValue;
    bottomTightFlap.textContent = newValue;
  });
  bottomLooseFlap.classList.add("display__bottom-loose-flap--flipping");
  bottomLooseFlap.addEventListener("animationend", () =>
    bottomLooseFlap.classList.remove("display__bottom-loose-flap--flipping")
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
