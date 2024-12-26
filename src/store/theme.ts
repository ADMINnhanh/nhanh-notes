import { computed, ref, type Ref } from "vue";
import { darkTheme, lightTheme, zhCN, dateZhCN } from "naive-ui";
import type { ConfigProviderProps, GlobalThemeOverrides } from "naive-ui";

// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// hljs.registerLanguage("javascript", javascript);
// 包含所有语言的版本
import hljs from "highlight.js/lib/common";
hljs.highlightAll();
// 选择你喜欢的主题
import "highlight.js/styles/default.css";
// import "highlight.js/styles/github.css";

export const theme = ref<"dark" | "light">(
  (localStorage.getItem("theme") as any) || "light"
);
export function ToggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme.value);
}

const ThemeOverrides: GlobalThemeOverrides = {
  common: {
    // borderRadius: "3px",
    // borderRadiusSmall: "2px",
    // fontSize: "14px",
    // fontSizeMini: "12px",
    // fontSizeTiny: "12px",
    // fontSizeSmall: "14px",
    // fontSizeMedium: "14px",
    // fontSizeLarge: "15px",
    // fontSizeHuge: "16px",
    // lineHeight: "1.6",
    // heightMini: "16px",
    // heightTiny: "22px",
    // heightSmall: "28px",
    // heightMedium: "34px",
    // heightLarge: "40px",
    // heightHuge: "46px",
  },
};
export const configProvider = computed<ConfigProviderProps>(() => {
  return {
    theme: theme.value == "light" ? lightTheme : darkTheme,
    "theme-overrides": ThemeOverrides,
    locale: zhCN,
    "date-locale": dateZhCN,
    hljs,
  };
});
