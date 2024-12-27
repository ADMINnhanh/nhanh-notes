import "./inputCss";
import "./keymaster.js";

requestAnimationFrame(() => {
  window.key.filter = (event) => true;
});
