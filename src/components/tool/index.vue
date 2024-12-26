<script setup lang="ts">
import { NButton, NDivider, NFlex, NIcon, NSpace, NSwitch } from "naive-ui";
import { LogoGithub, SunnyOutline, MoonOutline } from "@vicons/ionicons5";
import { theme, ToggleTheme } from "@/store/theme";
</script>

<template>
  <NFlex justify="space-between">
    <NSpace>
      <NButton text>文件</NButton>
      <NButton text>编辑</NButton>
      <NButton text>帮助</NButton>
    </NSpace>
    <NSpace>
      <NSwitch
        :value="theme == 'light'"
        @update:value="ToggleTheme"
        size="small"
      >
        <template #icon>
          <NIcon :component="theme == 'light' ? SunnyOutline : MoonOutline" />
        </template>
      </NSwitch>
      <NDivider vertical />
      <NButton
        text
        tag="a"
        href="https://github.com/ADMINnhanh/nhanh-notes"
        target="_blank"
      >
        <template #icon>
          <NIcon :component="LogoGithub" />
        </template>
      </NButton>
    </NSpace>
  </NFlex>
</template>

<style scoped lang="less">
.n-flex {
  padding: 10px 20px;
  border-bottom: 1px solid var(--border-color);
  .n-space {
    :deep(> div) {
      display: flex;
      align-items: center;
    }
  }
}
</style>
