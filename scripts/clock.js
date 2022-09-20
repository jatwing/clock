const getTwoDigitTime = (date) => {
  const hour = `0${date.getHours()}`.slice(-2);
  const minute = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);
  return { hour, minute, second };
};

const setFlapText = (flap, textContent) => {
  const span = Array.from(flap.childNodes).find(
    (node) => node.tagName === 'SPAN',
  );
  span.textContent = textContent;
};

const setFlapDisplay = (index, newValue, oldValue = null) => {
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
  setFlapText(secondFlap, oldValue || newValue);
  setFlapText(thirdFlap, oldValue || newValue);
  setFlapText(fourthFlap, newValue);
  if (!oldValue) {
    return;
  }
  secondFlap.classList.add('display__flap--flipping');
  secondFlap.addEventListener('animationend', () => {
    secondFlap.classList.remove('display__flap--flipping');
    setFlapText(secondFlap, newValue);
    setFlapText(thirdFlap, newValue);
  });
  fourthFlap.classList.add('display__flap--flipping');
  fourthFlap.addEventListener('animationend', () => fourthFlap.classList.remove('display__flap--flipping'));
};

const setTime = () => {
  const now = getTwoDigitTime(new Date());
  setFlapDisplay(1, now.hour);
  setFlapDisplay(2, now.minute);
};

const updateTime = () => {
  const now = getTwoDigitTime(new Date());
  const oneSecondAgo = getTwoDigitTime(new Date(new Date().getTime() - 1000));
  if (now.hour !== oneSecondAgo.hour) {
    setFlapDisplay(1, now.hour, oneSecondAgo.hour);
  }
  if (now.minute !== oneSecondAgo.minute) {
    setFlapDisplay(2, now.minute, oneSecondAgo.minute);
  }
};

let interval = null;

document.addEventListener('DOMContentLoaded', () => {
  setTime();
  interval = setInterval(updateTime, 1000);
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    setTime();
    interval = setInterval(updateTime, 1000);
  } else {
    clearInterval(interval);
  }
});
