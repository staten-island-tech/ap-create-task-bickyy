import { DOMSelectors } from "./DOM";
import { heroList } from "./hero";

let regeneratorRuntime = require("regenerator-runtime");

// const init = function () {
//   heroList.forEach((hero) =>
//     DOMSelectors.heroContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div class = "heroCard">
//       </span>
//         <div class= "imgCard">
//         <img
//             class="heroImage"
//               src="https://i.pinimg.com/564x/e6/12/39/e612391ab8447476c0e723f46c99bd73.jpg"
//         />
//         </div>
//           <h1 class="heroName">${hero.name}</h1>
//     </div>
//     `
//     )
//   );
// };

// init();

// $(function () {
//     $("i").click(function () {
//       $("i").toggleClass("press", 1000);
//     });
//   });

const heart = function () {
  ("DOMSelectors.heart").click(function () {
    "DOMSelectors.heart".toggleClass("press");
  });
};

heart();


