import { _GenerateUUID } from "nhanh-pure-function";
import { computed, ref } from "vue";

const GlobalLoading = ref(new Map<string, string>());

export const spinValue = computed(() => {
  const show = GlobalLoading.value.size > 0;
  const description = Array.from(GlobalLoading.value.values());
  return { show, description };
});
export function StartLoading(text = "正获取所需资源") {
  const key = _GenerateUUID();
  GlobalLoading.value.set(key, text);
  return key;
}
export function EndLoading(key: string) {
  GlobalLoading.value.delete(key);
}

// StartLoading("正获取文字描述");
// StartLoading("123");
