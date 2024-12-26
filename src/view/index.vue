<script setup lang="ts">
import Tool from "@/components/tool/index.vue";
import { StartLoading } from "@/store/loading";
import { NCode } from "naive-ui";
</script>

<template>
  <div class="app">
    <Tool />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  @media screen and (max-width: 1000px) {
    .app {
      left: 0;
    }
  }
  --width: 1000px;
  .app {
    width: var(--width);
    max-width: 100vw;
    height: var(--100vh, 100vh);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: calc(50% - var(--width) / 2);
  }
}
</style>
