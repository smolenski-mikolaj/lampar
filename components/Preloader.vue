<template>
  <div
    ref="preloader"
    class="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-white transition-opacity duration-500"
  >
    <img class="h-[35px] animate-pulse" src="/img/logo.svg" alt="logo" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const preloader = ref(null as HTMLElement | null);

onMounted(() => {
  preloader.value?.classList.add("opacity-0");
  setTimeout(() => {
    preloader.value?.classList.add("hidden");
  }, 500);
});
</script>
