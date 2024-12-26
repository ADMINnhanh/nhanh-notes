<script setup lang="ts">
import { onUnmounted, ref } from "vue";

interface PropsType {
  color?: string;
  timing?: boolean;
}
const props = withDefaults(defineProps<PropsType>(), {
  color: "var(--text-color)",
});

const time = ref(0);
let timeout: number;
if (props.timing) timeout = setInterval(() => time.value++, 1000);

onUnmounted(() => {
  clearInterval(timeout);
});
</script>

<template>
  <div :style="{ color }" class="loading">
    <slot>正在加载模块所需资源</slot>
    {{ props.timing ? ` (  ${time}s ) ` : "" }}
    <span>.</span><span>.</span><span>.</span>
  </div>
</template>

<style scoped lang="less">
@keyframes loadingDotsAnimation {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  span {
    display: inline-block;
    animation: loadingDotsAnimation 1.6s linear infinite;
    margin: 0 2px;
    &:nth-of-type(1) {
      margin-left: 5px;
    }
    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.4s;
    }
  }
}
</style>
