import { watch } from "vue";
import { theme } from "@/store/theme";

const publicCss = {};
InjectStyle(publicCss);

const light = {
  "background-color": "rgb(255, 255, 255)",
  color: "rgb(51, 54, 57)",
  "border-color": "rgb(239, 239, 245)",
  "text-color": "rgb(51, 54, 57)",
};
const dark = {
  "background-color": "rgb(16, 16, 20)",
  color: "rgba(255, 255, 255, 0.82)",
  "border-color": "rgba(255, 255, 255, 0.09)",
  "text-color": "rgba(255, 255, 255, 0.82)",
};

watch(
  () => theme.value,
  (theme) => {
    InjectStyle(theme == "light" ? light : dark);
    document.body.classList.toggle("dark", theme == "dark");
  },
  { immediate: true }
);
/** 向 html 节点注入 css 变量 */
function InjectStyle(style: { [key: string]: string }) {
  const html = document.querySelector("html");
  if (!html) return;
  for (const key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      html.style.setProperty("--" + key, style[key]);
    }
  }
}

function UpdateVh() {
  const htmlDom = document.querySelector("html");
  htmlDom?.style.setProperty("--100vh", window.innerHeight + "px");
}
requestAnimationFrame(UpdateVh);
window.addEventListener("resize", UpdateVh);
