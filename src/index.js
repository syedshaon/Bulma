// import "normalize.css";
// Will be using reset css through scss

//  TO DISABLE DONT IMPORT * AS bOOTSTRAP ALSO DON'T IMPORT BOOTSTRAP IN STYLE.SCSS FILE
import "./style.scss";

/* Import Images */

import "./assets/fundamentals.svg";
import "./assets/react.svg";
import "./assets/showcase.svg";

const el = document.querySelector(".navbar-burger");

el.addEventListener("click", () => {
  // Get the target from the "data-target" attribute
  /* const target = el.dataset.target; */
  const targetExpand = document.getElementById("navbarBasicExample");

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  el.classList.toggle("is-active");
  targetExpand.classList.toggle("is-active");
});

/* npx kill-port 3000 */
