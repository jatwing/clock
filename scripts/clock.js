const getTwoDigitTime = (date) => {
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  const second = ("0" + date.getSeconds()).slice(-2);
  return { hour, minute, second };
};

const setFlapText = (flap, text) => {
  for (const node of flap.childNodes) {
    if (node.tagName === "SPAN") {
      node.textContent = text;
      return;
    }
  }
};

const setFlapDisplay = (index, newValue, oldValue) => {
  const firstFlap = document.querySelector(`
    .display:nth-child(${index}) .display__flap:nth-child(1)
  `);
  const secondFlap = document.querySelector(`
    .display:nth-child(${index}) .display__flap:nth-child(2)
  `);
  const thirdFlap = document.querySelector(`
    .display:nth-child(${index}) .display__flap:nth-child(3)
  `);
  const fourthFlap = document.querySelector(`
    .display:nth-child(${index}) .display__flap:nth-child(4)
  `);
  setFlapText(firstFlap, newValue);
  setFlapText(secondFlap, oldValue);
  setFlapText(thirdFlap, oldValue);
  setFlapText(fourthFlap, newValue);
  if (newValue === oldValue) {
    return;
  }
  secondFlap.classList.add("display__flap--flipping");
  secondFlap.addEventListener("animationend", () => {
    secondFlap.classList.remove("display__flap--flipping");
    setFlapText(secondFlap, newValue);
    setFlapText(thirdFlap, newValue);
  });
  fourthFlap.classList.add("display__flap--flipping");
  fourthFlap.addEventListener("animationend", () =>
    fourthFlap.classList.remove("display__flap--flipping")
  );
};

const setTime = () => {
  const now = getTwoDigitTime(new Date());
  setFlapDisplay(1, now.hour, now.hour);
  setFlapDisplay(2, now.minute, now.minute);
};

const updateTime = () => {
  const now = getTwoDigitTime(new Date());
  const oneSecondAgo = getTwoDigitTime(new Date(new Date().getTime() - 1000));
  if (now.hour != oneSecondAgo.hour) {
    setFlapDisplay(1, now.hour, oneSecondAgo.hour);
  }
  if (now.minute != oneSecondAgo.minute) {
    setFlapDisplay(2, now.minute, oneSecondAgo.minute);
  }
};

setTime();
const interval = setInterval(updateTime, 1000);
