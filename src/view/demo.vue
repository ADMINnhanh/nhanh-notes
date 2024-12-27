<script setup lang="ts">
function ComputedHeight(payload: Event) {
  const textarea = payload.target as HTMLTextAreaElement;
  if (textarea) textarea.style.height = `${textarea.scrollHeight}px`; // 设置高度为内容高度
}
</script>

<template>
  <textarea @input="ComputedHeight" />
</template>

<style scoped lang="less">
textarea {
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  padding: 0;
  line-height: 1.5;

  margin: var(--margin, 16px 0 16px 0);
  height: var(--size, 14px);
  font-size: var(--size, 14px);
  font-weight: var(--weight-size, 400);
}
.h1 {
  --margin: 28px 0 20px 0;
  --size: 30px;
  --weight-size: 500;
}
.h2 {
  --margin: 28px 0 20px 0;
  --size: 22px;
  --weight-size: 500;
}
.h3 {
  --margin: 28px 0 20px 0;
  --size: 18px;
  --weight-size: 500;
}
.h4 {
  --margin: 28px 0 18px 0;
  --size: 16px;
  --weight-size: 500;
}
.ol {
}
.ul {
}
</style>
