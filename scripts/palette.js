const changeColor = () => {
  const page = document.querySelector(".page");
  if (page.classList.contains("page--red")) {
    page.classList.remove("page--red");
    localStorage.setItem("isPageRed", false);
    return;
  }
  page.classList.add("page--red");
  localStorage.setItem("isPageRed", true);
};

const initialiseColor = () => {
  const isPageRed = JSON.parse(localStorage.getItem("isPageRed"));
  if (isPageRed) {
    changeColor();
  }
};

const palette = document.querySelector(".header__link:nth-child(2)");
palette.addEventListener("click", () => changeColor());
initialiseColor();
