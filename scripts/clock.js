console.log("hello");

const setDigit = (flapDisplayId, value) => {
  const flapBackTop = document.querySelector(
    `#${flapDisplayId} .flap.back.top`
  );
  const flapFrontTop = document.querySelector(
    `#${flapDisplayId} .flap.front.top`
  );
  const flapFrontBottom = document.querySelector(
    `#${flapDisplayId} .flap.front.bottom`
  );
  const flapBackBottom = document.querySelector(
    `#${flapDisplayId} .flap.back.bottom`
  );

  flapBackTop.textContent = value;
  flapFrontTop.textContent = value;
  flapFrontBottom.textContent = value;
  flapBackBottom.textContent = value;

  flapFrontTop.classList.add("animating");
  flapFrontTop.addEventListener("animationend", () =>
    flapFrontTop.classList.remove("animating")
  );

  flapBackBottom.classList.add("animating");
  flapBackBottom.addEventListener("animationend", () =>
    flapBackBottom.classList.remove("animating")
  );
};

const showTime = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  // TODO am pm
  setDigit("hour-first-digit", Math.floor(hour / 10));
  setDigit("hour-second-digit", hour % 10);
  setDigit("minute-first-digit", Math.floor(minute / 10));
  setDigit("minute-second-digit", minute % 10);
  setDigit("second-first-digit", Math.floor(second / 10));
  setDigit("second-second-digit", second % 10);
};

const interval = setInterval(showTime, 1000);
