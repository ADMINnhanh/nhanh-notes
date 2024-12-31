<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NDialogProvider } from "naive-ui";
import Main from "@/view/index.vue";
import { configProvider } from "@/store/theme";
</script>

<template>
  <NConfigProvider :="configProvider">
    <NMessageProvider>
      <NDialogProvider>
        <Main />
      </NDialogProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style lang="less"></style>
