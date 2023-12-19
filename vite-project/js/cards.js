import "../css/style.css";
import { URL } from "./main.js";

function populate(arr) {
  arr.forEach((el) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class=card><h1>${author_name}</h1>
      <img class="imgs" src="${el.img}" alt="">
      <h3 id="h3" class="">${el.description}</h3>
      </div>`
    )
  );
}
