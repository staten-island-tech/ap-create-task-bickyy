import { DOMSelectors } from "./DOM";
import { heroList } from "./hero";

const init = function () {
  heroList.forEach((hero) =>
    DOMSelectors.heroContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="heroCard">
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

// const titleBtn = function () {
//   DOMSelectors.title.addEventListener("click", function () {
//     init();
//   });
// };
// titleBtn();

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
heartBtn();

const color = document.getElementsByClassName("heart");
const heroCard = dococument.getElementsByClassName("heroCard");

function colorTest() {
  if ((color.style.color = "red")) {
    heroCard.style.display = "inital";
  } else {
    heroCard.style.display = "none";
  }
}

const favoriteBtn = function () {
  DOMSelectors.favorite.addEventListener("click", colorTest());
};
favoriteBtn();
