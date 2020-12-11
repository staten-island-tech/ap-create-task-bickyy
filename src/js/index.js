import { DOMSelectors } from "./DOM";
import { heroList } from "./hero";

let regeneratorRuntime = require("regenerator-runtime");

const init = function () {
  heroList.forEach((hero) =>
    DOMSelectors.heroContainer.insertAdjacentHTML(
      "beforeend",
      ` 
      <div class = "heroCard">
      <div class="wrapper">
        <input type="checkbox" class="heart-checkbox" id="heart-checkbox">
        <label class="heart" for="heart-checkbox"></label>
      </div>
        <div class= "imgCard">
        <img
            class="heroImage"
              src="https://i.pinimg.com/564x/e6/12/39/e612391ab8447476c0e723f46c99bd73.jpg"
        />
        </div>
          <h1 class="${hero.name}">Spiderman</h1>
    </div>
    `
    )
  );
};

init();
