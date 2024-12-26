import { configProvider } from "@/store/theme";
import { createDiscreteApi } from "naive-ui";

const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
  ["message", "dialog", "notification", "loadingBar", "modal"],
  { configProviderProps: configProvider }
);
window.$message = message;
window.$notification = notification;
window.$dialog = dialog;
window.$loadingBar = loadingBar;
window.$modal = modal;
