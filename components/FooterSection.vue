<template>
  <div class="bg-gray-200 px-10 pt-6 pb-4">
    <div class="flex justify-center pb-6" v-animate-on-scroll="'bottom'">
      <div
        class="w-full max-w-[300px] rounded-xl bg-gray-100 py-6 px-10 text-center shadow"
      >
        <div>
          <span class="font-semibold">LAMPAR S.J.</span><br />
          02-969 Warszawa,<br />
          ul. Andrutowa 3h<br /><br />

          NIP: <span class="font-semibold">521-033-00-25</span>
        </div>
      </div>
    </div>
    <div class="text-center text-[12px]">
      Wykorzytano
      <a
        target="_blank"
        class="text-blue-600"
        href="https://pl.freepik.com/darmowe-zdjecie/nowoczesny-wystroj-biura_11111306.htm#query=office%20lights&position=0&from_view=search&track=sph"
        >obraz autorstwa wirestock</a
      >
      na Freepik oraz obrazy
      <a
        target="_blank"
        class="text-blue-600"
        href="https://www.vexels.com/free-vectors/light-bulbs-set/"
      >
        vexels.com
      </a>
    </div>
  </div>
  <footer class="flex justify-center bg-gray-300 py-4 text-sm font-semibold">
    © {{ new Date().getFullYear() }} Copyright:
    <a
      class="pl-1 text-blue-500"
      href="http://smolenski-mikolaj.pl/"
      target="_blank"
      >Webico</a
    >
  </footer>
</template>
