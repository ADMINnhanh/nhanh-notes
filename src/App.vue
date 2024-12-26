<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NSpin,
} from "naive-ui";
import Main from "@/view/index.vue";
import { computed } from "vue";
import { spinValue } from "@/store/loading";
import { configProvider } from "@/store/theme";
import LoadingText from "@/components/layout/LoadingText.vue";

const spinApi = computed(() => {
  return {
    show: spinValue.value.show,
    delay: 200,
    style: {
      height: "100%",
    },
    contentStyle: {
      width: "100vw",
      height: "var(--100vh)",
    },
  };
});
</script>

<template>
  <NConfigProvider :="configProvider">
    <NMessageProvider>
      <NDialogProvider>
        <NSpin :="spinApi">
          <template #description>
            <LoadingText
              v-for="(item, index) in spinValue.description"
              :key="index + item"
              color="var(--n-color)"
            >
              {{ item }}
            </LoadingText>
          </template>
          <Main />
        </NSpin>
      </NDialogProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style lang="less"></style>
