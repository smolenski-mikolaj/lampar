<template>
  <div
    v-if="wide"
    class="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
  >
    <slot></slot>
  </div>
  <div
    v-else
    class="w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  wide: Boolean,
});
</script>
