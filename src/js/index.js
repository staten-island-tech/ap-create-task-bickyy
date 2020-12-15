import { DOMSelectors } from "./DOM";
import { heroList } from "./hero";

// let regeneratorRuntime = require("regenerator-runtime");
// regeneratorRuntime;

const init = function () {
  heroList.forEach((hero) =>
    DOMSelectors.heroContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div  id = "${hero.name}" class = "heroCard">
      </span>
        <div class= "imgCard">
        <img
            class="heroImage"
              src="${hero.img}"
        />
        </div>
          <h1 class="heroName">${hero.name}
          <i class="heart"></i>
          </h1>
      </div>
    `
    )
  );
};

init();

const favoriteBtn = function () {
  DOMSelectors.favorite.addEventListener("click", function () {
    DOMSelectors.heroContainer.innerHTML = "";
  });
};
favoriteBtn();

const titleBtn = function () {
  DOMSelectors.title.addEventListener("click", function () {
    init();
  });
};
titleBtn();

const heart = document.getElementsByClassName("heart");
const heartBtn = function () {
  heart.addEventListener("click", function () {
    heart.classList.toggle("press");
  });
};
heartBtn();

