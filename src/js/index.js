import { DOMSelectors } from "./DOM";
import { heroList } from "./hero";

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

const titleBtn = function () {
  DOMSelectors.title.addEventListener("click", function () {
    init();
  });
};
titleBtn();

const heart = document.getElementsByClassName("heart")[0];
const heartBtn = function () {
  heart.addEventListener("click", function () {
    heart.classList.toggle("press");
  });
};
heartBtn();

const favoriteBtn = function () {
  DOMSelectors.favorite.addEventListener("click", function () {
    DOMSelectors.heroContainer.innerHTML = "";
  });
  const color = document.getElementsByClassName("heart");
  const heroCard = dococument.getElementsByClassName("heroCard");
  if ((color.style.color = "red")) {
    heroCard.style.display = "inital";
  } else {
    heroCard.style.display = "none";
  }
};
favoriteBtn();
