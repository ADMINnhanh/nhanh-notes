<script setup lang="ts">
import "@/utils/shortcutKey";
import ".";
import Tool from "@/components/tool/index.vue";
import { NDropdown } from "naive-ui";
import { HandleContextMenu, dropdownApi } from "./menu";

import demo from "./demo.vue";
</script>

<template>
  <div class="menu-area" @contextmenu="HandleContextMenu">
    <div class="app">
      <Tool />
      <demo />
    </div>
    <NDropdown :="dropdownApi" />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  .menu-area {
    width: 100vw;
    height: var(--100vh, 100vh);
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
}
</style>
