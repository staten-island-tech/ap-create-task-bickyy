import { DOMSelectors } from "./DOM";
import { heroList } from "./hero";

const init = function () {
  heroList.forEach((hero) =>
    DOMSelectors.heroContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="heroCard">
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

const refresh = function () {
  DOMSelectors.refresh.addEventListener("click", function () {
    window.location.reload();
  });
};
refresh();

const heart = Array.from(document.getElementsByClassName("heart"));
const heartBtn = function () {
  heart.forEach((h) =>
    h.addEventListener("click", function () {
      h.classList.toggle("press");
    })
  );
};
const heroCard = Array.from(document.getElementsByClassName("heroCard"));
function colorTest(arr) {
  arr.forEach((c) => {
    if (!c.children[1].children[0].classList.contains("press")) {
      c.style.display = "none";
    }
  });
}
const favoriteBtn = function () {
  DOMSelectors.favorite.addEventListener("click", () => colorTest(heroCard));
};

favoriteBtn();
heartBtn();

function all() {
  heroCard.forEach((c) => {
    if (!c.children[1].children[0].classList.contains("press")) {
      c.style.display = "";
    }
  });
}
const titleBtn = function () {
  DOMSelectors.title.addEventListener("click", all);
};
titleBtn();
