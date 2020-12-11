import { DOMSelectors } from "./DOM";
import { heroList } from "./hero";

const init = function () {
  heroList.forEach((hero) =>
    DOMSelectors.heroContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class = "heroCard">
      </span>
        <div class= "imgCard">
        <img
            class="heroImage"
              src="${hero.img}"
        />
        </div>
          <h1 class="heroName">${hero.name}
          <i id="${hero.name}" class="heart"></i>
          </h1>
      </div>
    `
    )
  );
};

init();

const heartButton = function () {
  const heart = document.getElementsByClassName("heart");
  heart.addEventListener("click", function () {
    heart.classList.toggle("press");
  });
};

heartButton();



