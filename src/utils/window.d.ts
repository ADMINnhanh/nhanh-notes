import type { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";
import type { NotificationApiInjection } from "naive-ui/es/notification/src/NotificationProvider";
import type { DialogApiInjection } from "naive-ui/es/dialog/src/DialogProvider";
import type { LoadingBarProviderInst } from "naive-ui/es/loading-bar/index";
import type { ModalApiInjection } from "naive-ui/es/modal/src/ModalProvider";
import Key from "./shortcutKey/keymaster.d";
import type { Ref } from "vue";

import "@amap/amap-jsapi-types";

declare global {
  interface Window {
    $message: MessageApiInjection;
    $notification: NotificationApiInjection;
    $dialog: DialogApiInjection;
    $loadingBar: LoadingBarProviderInst;
    $modal: ModalApiInjection;

    key: Key;
  }
}
