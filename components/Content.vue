<template>
  <main class="flex justify-center px-10">
    <Frame>
      <section class="py-12 md:py-18 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="order-2 md:order-1 flex justify-center flex-col text-center md:text-left"
        >
          <h1
            class="text-[28px] md:text-[40px] mt-2 md:mt-0 font-extrabold leading-8 md:leading-10"
          >
            <span class="text-blue-500">Profesjonalnie</span> <br />
            <span class="text-gray-700">oświetlimy Twoje wnętrze</span>
          </h1>
          <h2 class="text-gray-500 text-[15px] mt-4">
            Oferujemy wykonanie wszelkich prac elektroinstalacyjnych. Sprawdzone
            przez nas firmy uczciwie i terminowo wykonują powierzoną im pracę.
          </h2>
        </div>
        <div
          class="order-1 md:order-2 md:col-span-2 flex justify-center flex-col items-center pointer-events-none"
        >
          <img
            class="max-h-[200px] md:max-h-[500px]"
            src="~/assets/img/undraw_light_the_fire_gt58.svg"
          />
        </div>
      </section>
      <section class="py-4 md:py-24 grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <div class="flex items-center">
          <h4
            class="text-[24px] md:text-[28px] text-center md:text-left font-bold leading-8 my-4"
          >
            Mamy bogate doświadczenie
          </h4>
        </div>
        <div class="col-span-2 flex justify-center md:block">
          <div
            class="grid grid-cols-1 md:grid-cols-3 max-w-[200px] md:max-w-none rounded-xl bg-gray-100 p-5"
          >
            <div class="flex items-center justify-center my-3">
              <div class="text-center leading-7 md:leading-10">
                <h4 class="text-[32px] md:text-[48px] font-bold text-gray-700">
                  20
                </h4>
                <div class="text-sm text-gray-500">partnerów</div>
              </div>
            </div>
            <div class="flex items-center justify-center my-3">
              <div class="text-center leading-7 md:leading-10">
                <h4 class="text-[32px] md:text-[48px] font-bold text-gray-700">
                  1000
                </h4>
                <div class="text-sm text-gray-500">zrealizowanych usług</div>
              </div>
            </div>
            <div class="flex items-center justify-center my-3">
              <div class="text-center leading-7 md:leading-10">
                <h4 class="text-[32px] md:text-[48px] font-bold text-gray-700">
                  30
                </h4>
                <div class="text-sm text-gray-500">lat doświadczenia</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 md:py-36 flex justify-center items-center">
        <div class="flex justify-center items-center w-1/2">
          <h4 class="text-medium md:text-[20px] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo
            quisquam voluptatem sapiente? Pariatur delectus reiciendis sapiente
            consequatur quae voluptate enim repellendus error.
          </h4>
          <div
            class="absolute -z-10 pointer-events-none text-gray-100 w-[200px] rotate-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="currentColor"
                d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z"
              />
            </svg>
          </div>
        </div>
      </section>
    </Frame>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
