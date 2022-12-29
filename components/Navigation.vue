<template>
  <nav class="flex h-20 justify-center px-4 sm:px-10">
    <Frame wide class="flex items-center justify-between">
      <div
        class="flex items-center justify-center text-[20px] text-blue-500 sm:text-[24px]"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6 sm:h-8 sm:w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
        </div>
        <span class="pl-1 font-bold">Lampar</span>
      </div>
      <div class="hidden md:block">
        <button
          class="px-2 text-gray-800 hover:text-blue-500"
          @click.prevent="smoothScrollTo('#about')"
        >
          O nas
        </button>
        <button
          class="px-2 text-gray-800 hover:text-blue-500"
          @click.prevent="smoothScrollTo('#offer')"
        >
          Oferta
        </button>
        <button
          class="px-2 text-gray-800 hover:text-blue-500"
          @click.prevent="smoothScrollTo('#portfolio')"
        >
          Realizacje
        </button>
        <button
          class="px-2 text-gray-800 hover:text-blue-500"
          @click.prevent="smoothScrollTo('#contact')"
        >
          Kontakt
        </button>
      </div>
      <div class="flex flex-col text-sm sm:text-base">
        <div class="flex items-center">
          <span class="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>
          <span>+48 608 521 951</span>
        </div>
        <a class="flex items-center" href="mailto:lampar@lampar.com.pl">
          <span class="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>
          <span>lampar@lampar.com.pl</span>
        </a>
      </div>
    </Frame>
  </nav>
</template>

<script setup lang="ts">
const smoothScrollTo = (id: string) => {
  const target = document.querySelector(id) as HTMLElement;
  const targetOffsetTop = target?.getBoundingClientRect().top;

  window.scrollTo({
    top: targetOffsetTop,
    behavior: "smooth",
  });
};
</script>

<style scoped></style>
