<template>
  <nav
    class="navbar absolute -top-40 z-10 flex h-20 w-full justify-center bg-white px-4 opacity-5 sm:px-10"
    ref="nav"
  >
    <Frame class="flex items-center justify-between">
      <div class="flex h-full items-center">
        <img class="h-[25px] lg:h-[35px]" src="/img/logo.svg" alt="logo" />
      </div>
      <div class="hidden lg:block">
        <button
          class="px-2 text-sm font-semibold uppercase text-gray-800 hover:text-blue-500 lg:px-3"
          @click.prevent="smoothScrollTo('#about')"
        >
          O nas
        </button>
        <button
          class="px-2 text-sm font-semibold uppercase text-gray-800 hover:text-blue-500 lg:px-3"
          @click.prevent="smoothScrollTo('#offer')"
        >
          Oferta
        </button>
        <button
          class="px-2 text-sm font-semibold uppercase text-gray-800 hover:text-blue-500 lg:px-3"
          @click.prevent="smoothScrollTo('#portfolio')"
        >
          Realizacje
        </button>
        <button
          class="px-2 text-sm font-semibold uppercase text-gray-800 hover:text-blue-500 lg:px-3"
          @click.prevent="smoothScrollTo('#contact')"
        >
          Kontakt
        </button>
      </div>
    </Frame>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const nav = ref(null as HTMLElement | null);

onMounted(() => {
  nav.value?.classList.add("!top-0", "opacity-100");
});

const smoothScrollTo = (id: string) => {
  const target = document.querySelector(id) as HTMLElement;
  const targetOffsetTop = target?.getBoundingClientRect().top;

  window.scrollTo({
    top: targetOffsetTop,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.navbar {
  transition: top 1.5s ease-in-out 0.1s, opacity 0.5s ease-in-out 1s;
}
</style>
