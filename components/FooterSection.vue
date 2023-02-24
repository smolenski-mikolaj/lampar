<template>
  <div class="bg-gray-200 px-6 sm:px-10">
    <div class="flex justify-center">
      <Frame class="text-center">
        <div class="mb-10">
          <p class="text-[24px] font-semibold">LAMPAR S.J.</p>
          <p class="mt-1 mb-2 leading-tight text-gray-500">
            02-969 Warszawa,<br />
            ul. Andrutowa 3h
          </p>
          <p class="text-[20px] text-gray-900">
            NIP: <span class="font-semibold">521-033-00-25</span>
          </p>
        </div>

        <div class="mb-4 flex flex-col">
          <div class="flex justify-center">
            <a class="flex" href="tel:+48608521951" role="button">
              <span class="pr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="mt-1 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <span>608 521 951</span>
            </a>
          </div>
          <div class="flex justify-center">
            <a
              class="flex items-center justify-center"
              href="mailto:lampar@lampar.com.pl"
            >
              <span class="pr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.8"
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
        </div>
      </Frame>
    </div>

    <div class="my-10 flex justify-center">
      <hr class="w-10 border-gray-400" />
    </div>

    <div class="pb-4 text-center text-[12px]">
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
