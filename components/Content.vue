<template>
  <main>
    <section
      class="relative bg-[url('/img/interior.jpg')] bg-cover bg-right-top"
    >
      <div
        class="pointer-events-none absolute top-0 left-0 h-full w-full bg-gradient-to-t from-blue-800 sm:bg-gradient-to-r"
      ></div>
      <div class="relative flex justify-center px-6 sm:px-10">
        <Frame>
          <div class="flex justify-center sm:block">
            <div
              class="flex flex-col justify-center pt-40 pb-6 text-center sm:w-1/2 sm:pt-24 sm:pb-64 sm:text-left lg:w-1/3 3xl:pb-80"
            >
              <h1
                v-animate-on-scroll
                class="text-[28px] font-extrabold leading-8 sm:text-[36px] sm:leading-9"
              >
                <span class="text-blue-300">Oświetlimy</span>
                <br />
                <span class="text-gray-100">każdy obiekt</span>
              </h1>
              <h2 v-animate-on-scroll class="mt-4 pb-16 text-gray-200">
                Jesteśmy dystrybutorem oświetlenia profesjonalnego,
                dekoracyjnego i awaryjnego z wieloletnim doświadczeniem na rynku
                polskim.
              </h2>
            </div>
          </div>
        </Frame>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="absolute -bottom-[1px] w-full"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,208C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
    <section
      class="relative flex justify-center px-6 pt-10 pb-10 md:-mt-8 md:pt-0 2xl:-mt-16 2xl:pt-0"
    >
      <Frame id="about" class="pt-6">
        <div>
          <div class="text-center text-gray-800">
            <h4
              v-animate-on-scroll
              class="mb-2 text-[24px] font-bold leading-6 text-gray-800 md:text-[28px] md:leading-8"
            >
              Kompleksowo realizujemy inwestycje
            </h4>
            <p
              v-animate-on-scroll
              class="px-4 pb-4 text-center text-gray-600 md:px-24 xl:px-48"
            >
              Oświetlamy obiekty użyteczności publicznej - biura, szkoły, centra
              handlowe, hotele, przychodnie, gabinety, restauracje, sklepy.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-cols-3 gap-2">
              <div
                v-animate-on-scroll
                class="my-3 flex items-center justify-center rounded-xl bg-gray-800 p-2 sm:p-5"
              >
                <div class="text-center leading-6 text-white">
                  <h4 class="text-[24px] font-bold sm:text-[32px]">
                    <span v-countdown-on-scroll>30</span
                    ><span class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </h4>
                  <p class="mt-1 text-sm">lat w branży</p>
                </div>
              </div>
              <div
                v-animate-on-scroll
                class="mb-1 mt-4 flex items-center justify-center rounded-xl bg-gray-800 p-2 sm:p-5"
              >
                <div class="text-center leading-6 text-white">
                  <h4 class="text-[24px] font-bold sm:text-[32px]">
                    <span v-countdown-on-scroll>500</span
                    ><span class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </h4>
                  <p class="mt-1 text-sm">realizacji</p>
                </div>
              </div>
              <div
                v-animate-on-scroll
                class="my-3 flex items-center justify-center rounded-xl bg-gray-800 p-2 sm:p-5"
              >
                <div class="text-center leading-6 text-white">
                  <h4 class="text-[24px] font-bold sm:text-[32px]">
                    <span v-countdown-on-scroll>20</span
                    ><span class="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </h4>
                  <p class="mt-1 max-w-[150px] text-sm">producentów</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Frame>
      <img
        class="pointer-events-none absolute left-[25%] top-0 h-12 rotate-12 md:left-[10%] md:-top-[12%] md:h-32"
        src="~/assets/img/icons/bulb1.svg"
        alt="żarówka dekoracyjna"
      />
      <img
        class="pointer-events-none absolute right-[30%] top-[92%] -z-10 h-12 -rotate-12 md:right-[15%] md:top-[60%] md:h-32"
        src="~/assets/img/icons/bulb2.svg"
        alt="żarówka dekoracyjna"
      />
    </section>
    <section class="relative flex justify-center px-10 pt-12" id="offer">
      <Frame>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div class="relative">
            <div class="md:sticky md:top-6 md:mt-4">
              <h4
                v-animate-on-scroll
                class="px-4 pb-4 text-center text-[24px] font-bold leading-6 text-gray-800 sm:px-0 md:text-left md:text-[28px] md:leading-8"
              >
                Oferujemy szeroki zakres
                <span class="text-blue-500">usług</span>
              </h4>
              <p
                v-animate-on-scroll
                class="pb-4 text-center text-gray-600 md:text-left"
              >
                Nasza działalność obejmuje współpracę ze sklepami
                oświetleniowymi i dekoracyjnymi w zakresie sprzedaży oświetlenia
                znanych i cenionych marek europejskich, współpracę z biurami
                projektowymi i projektantami oraz kompleksową obsługę zamówień
                inwestycyjnych w zakresie oświetlenia dekoracyjnego.
              </p>
            </div>
          </div>
          <div class="col-span-2 flex justify-center md:block">
            <div class="max-w-[400px] md:max-w-none">
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >systemy oświetlenia wewnętrznego i zewnętrznego</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >systemy oświetlenia awaryjnego</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >źródła światła</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >projekty oświetlenia</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >osprzęt elektroinstalacyjny renomowanych producentów krajowych
                i zagranicznych</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >kable i przewody</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >listwy i koryta kablowe</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >rozdzielnie nn, wyłączniki nadmiarowo-prądowe i
                różnicowo-prądowe</ListItem
              >
              <ListItem class="my-2 bg-gray-100 py-3" v-animate-on-scroll
                >gniazda i przewody do instalacji komputerowych i
                telewizyjnych</ListItem
              >
            </div>
          </div>
        </div>
      </Frame>
      <img
        class="pointer-events-none absolute left-[5%] top-[105%] -z-10 h-12 -rotate-6 md:left-[5%] md:top-[60%] md:h-32"
        src="~/assets/img/icons/bulb3.svg"
        alt="żarówka dekoracyjna"
      />
    </section>
    <section
      class="relative flex justify-center px-10 pt-16 pb-24 text-gray-800 md:pb-40 2xl:pb-52"
    >
      <Frame class="flex flex-col items-center">
        <div>
          <h4
            v-animate-on-scroll
            class="mb-4 text-[24px] font-bold md:text-[28px]"
          >
            Osprzęt
          </h4>
        </div>
        <div
          v-animate-on-scroll
          class="flex flex-col justify-center text-gray-400 sm:flex-row"
        >
          <img
            src="~/assets/img/partners/philips.svg"
            class="my-2 h-5 px-4"
            alt="Philips"
          />
          <img
            src="~/assets/img/partners/osram.svg"
            class="my-2 h-5 px-4"
            alt="Osram"
          />
          <img
            src="~/assets/img/partners/legrand.svg"
            class="my-2 h-5 px-4"
            alt="Legrand"
          />
          <img
            src="~/assets/img/partners/hager.svg"
            class="my-2 h-5 px-4"
            alt="Hager"
          />
        </div>
      </Frame>
      <svg
        class="absolute bottom-0 -z-10 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f6"
          fill-opacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,224C672,235,768,245,864,256C960,267,1056,277,1152,272C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <img
        class="pointer-events-none absolute top-[60%] right-[10%] -z-10 h-12 rotate-6 md:right-[5%] md:top-[40%] md:h-32"
        src="~/assets/img/icons/bulb4.svg"
        alt="żarówka dekoracyjna"
      />
    </section>
    <section
      class="flex justify-center bg-gray-100 px-8 pb-12 text-center sm:px-10"
      id="portfolio"
    >
      <Frame wide>
        <h4
          v-animate-on-scroll
          class="mb-8 pt-4 text-[24px] font-bold text-gray-800 md:text-[28px]"
        >
          Nasze <span class="text-blue-500">realizacje</span>
        </h4>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div class="flex justify-center" v-animate-on-scroll>
            <div>
              <div class="flex h-[100px] items-end">
                <img
                  class="my-2 max-h-[100px]"
                  src="~/assets/img/nero.png"
                  alt="Green Caffe Nero"
                />
              </div>
              <p class="my-2 leading-4">
                <strong> Green Caffe Nero </strong>
              </p>
            </div>
          </div>

          <div class="flex justify-center" v-animate-on-scroll>
            <div>
              <div class="flex h-[100px] items-end">
                <img
                  class="my-2 max-h-[100px]"
                  src="~/assets/img/wilanow.png"
                  alt="Muzeum Pałacu Króla Jana III"
                />
              </div>
              <p class="my-2 leading-4">
                <strong>
                  Muzeum Pałacu <br />
                  Króla Jana III
                </strong>
                <br />
                <span class="text-sm">w Wilanowie</span>
              </p>
            </div>
          </div>

          <div class="flex justify-center" v-animate-on-scroll>
            <div>
              <div class="flex h-[100px] items-end">
                <img
                  class="my-2 max-h-[100px]"
                  src="~/assets/img/mariott.png"
                  alt="Mariott Hotel w Warszawie"
                />
              </div>
              <p class="my-2 leading-4">
                <strong>Mariott Hotel</strong><br />
                <span class="text-sm">w Warszawie</span>
              </p>
            </div>
          </div>

          <div class="flex justify-center" v-animate-on-scroll>
            <div>
              <div class="flex h-[100px] items-end">
                <img
                  class="my-2 max-h-[100px]"
                  src="~/assets/img/american-school.png"
                  alt="American School of Warsaw"
                />
              </div>
              <p class="my-2 leading-4">
                <strong>American School</strong><br />
                <span class="text-sm">of Warsaw</span>
              </p>
            </div>
          </div>
        </div>

        <div class="my-10">
          <p class="text-sm" v-animate-on-scroll>a także</p>
          <div
            class="flex flex-wrap justify-center text-sm"
            v-animate-on-scroll
          >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Nexteam</strong> - Opel Dealer</ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Vector</strong> Doradztwo Biznesowe</ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>AB</strong> Technologie</ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>CDBP</strong> Sp. z o.o.</ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Jeronimo Martins</strong> - Biedronka</ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>New Approach</strong></ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Odyssey</strong> - Dealer Nissan</ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Winestory</strong></ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Estee Lauder</strong></ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Mountain Warehouse</strong></ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Kiehl's</strong></ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>MAC</strong></ListItem
            >
            <ListItem
              v-animate-on-scroll
              class="mx-1 my-1 bg-gray-200 py-1.5 sm:py-3"
              ><strong>Factory Annopol</strong></ListItem
            >
          </div>
          <p class="text-sm" v-animate-on-scroll>i wiele innych</p>
        </div>
      </Frame>
    </section>
    <!-- <section class="flex justify-center bg-gray-100 py-12 pt-4 text-center">
      <Frame>
        <h4
          v-animate-on-scroll
          class="text-[24px] font-bold text-gray-800 md:text-[28px]"
        >
          Jak pracujemy?
        </h4>
        <div class="flex justify-center">
          <div v-animate-on-scroll class="grid grid-cols-3 gap-4">
            <div
              class="relative my-3 flex items-center justify-center p-2 sm:p-5"
            >
              <div class="text-center text-gray-600">
                <div class="mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    class="h-10 w-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <div class="text-sm sm:text-base">Analizujemy potrzeby</div>
              </div>
              <div
                class="absolute -right-5 top-[20%] rotate-[8deg] text-blue-500 sm:top-[30%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div
              class="relative mt-4 mb-2 flex items-center justify-center p-2 sm:p-5"
            >
              <div class="text-center text-gray-600">
                <div class="mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-10 w-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div class="text-sm sm:text-base">Tworzymy kosztorys</div>
              </div>
              <div
                class="absolute -right-5 top-[17%] -rotate-[8deg] text-blue-500 sm:top-[28%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div class="my-3 flex items-center justify-center p-2 sm:p-5">
              <div class="text-center text-gray-600">
                <div class="mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-10 w-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <div class="text-sm sm:text-base">Wykonujemy instalację</div>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </section> -->
    <section class="flex justify-center bg-gray-100 px-10 pb-10" id="contact">
      <Frame wide class="rounded-xl p-5 text-gray-800">
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-12">
          <div class="mb-20 md:mb-0">
            <form @submit.prevent="handleContactFormSubmit">
              <div class="text-center md:text-left">
                <h4
                  class="text-[24px] font-bold leading-tight text-gray-800 md:text-[28px]"
                >
                  Kontakt
                </h4>
                <p class="pb-6 text-sm text-gray-600 sm:text-base">
                  Z chęcią odpowiemy na Twoje pytania
                </p>
              </div>

              <div class="mb-2">
                <label for="name" class="text-left text-sm text-gray-600"
                  >Imię i nazwisko</label
                >
                <div>
                  <input
                    class="w-full rounded-md border bg-white p-2 focus:border-gray-300 focus:outline-none"
                    type="text"
                    name="name"
                    id="name"
                    v-model="contactForm.name"
                    required
                  />
                </div>
              </div>

              <div class="mb-2">
                <label for="email" class="text-left text-sm text-gray-600"
                  >Adres email</label
                >
                <div>
                  <input
                    class="w-full rounded-md border bg-white p-2 focus:border-gray-300 focus:outline-none"
                    type="email"
                    name="email"
                    id="email"
                    v-model="contactForm.email"
                    required
                  />
                </div>
              </div>

              <div class="mb-2">
                <label for="message" class="text-left text-sm text-gray-600"
                  >Treść wiadomości</label
                >
                <div>
                  <textarea
                    class="w-full rounded-md border bg-white p-2 focus:border-gray-300 focus:outline-none"
                    type="text"
                    name="message"
                    id="message"
                    rows="6"
                    v-model="contactForm.message"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="mb-4 flex items-center">
                <input
                  class="h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 focus:outline-none"
                  type="checkbox"
                  name="permission"
                  id="permission"
                  required
                />
                <label
                  for="permission"
                  class="ml-2 cursor-pointer text-[12px] font-medium text-gray-600"
                  ><strong
                    >Wyrażam zgodę na przetwarzanie danych osobowych</strong
                  >
                  zgodnie z ustawą o ochronie danych osobowych w związku
                  wysłaniem zapytania przez formularz kontaktowy. Podanie danych
                  jest dobrowolne, ale niezbędne do przetworzenia zapytania.
                  Zostałem poinformowany, że przysługuje mi prawo dostępu do
                  swoich danych, możliwości ich poprawiania, żadanie
                  zaprzestania ich przetwarzania. Administratorem danych
                  osobowych jest LAMPAR S.J. z siedzibą przy ulicy Andrutowej 3h
                  w Warszawie.</label
                >
              </div>

              <div
                class="g-recaptcha mb-6 overflow-auto"
                data-sitekey="6LccYDQkAAAAACgAh9TlKCkn2L_OnwZg7up7AAnd"
              ></div>

              <div
                class="flex flex-col items-center justify-center md:flex-row md:justify-start"
              >
                <div>
                  <button
                    type="submit"
                    class="rounded bg-gray-600 py-2 px-4 font-bold text-white focus:bg-gray-800 focus:outline-none"
                    :disabled="sendingMessage"
                  >
                    Wyślij
                  </button>
                </div>
                <Transition>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="m-2 h-6 w-6 animate-spin md:inline-block"
                    v-if="sendingMessage"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </Transition>
              </div>
            </form>
            <Transition>
              <div
                v-if="messageSent"
                class="mt-2 text-center font-bold text-green-700 md:text-left"
              >
                Wysłano wiadomość!
              </div>
            </Transition>
            <Transition>
              <div
                v-if="recaptchaError"
                class="mt-2 text-center font-bold text-red-700 md:text-left"
              >
                Potwierdź że nie jesteś robotem.
              </div>
            </Transition>
            <Transition>
              <div
                v-if="messageSendingError"
                class="mt-2 text-center font-bold text-red-700 md:text-left"
              >
                Wystąpił błąd. Spróbuj ponownie później lub skontaktuj się z
                nami bezpośrednio drogą mailową lub telefoniczną.
              </div>
            </Transition>
          </div>
          <div class="col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.714378339727!2d21.097547716078935!3d52.1213254734496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192c5260352ee7%3A0xc024d035d44e6462!2sLampar.%20Dealer%20Philips!5e0!3m2!1spl!2spl!4v1672233510487!5m2!1spl!2spl"
              width="100%"
              height="100%"
              class="min-h-[200px] rounded-xl border grayscale sm:min-h-[500px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Frame>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
const sendingMessage = ref(false);
const messageSent = ref(false);
const messageSendingError = ref(false);
const recaptchaError = ref(false);

const contactForm = ref({
  name: "",
  email: "",
  message: "",
});

const handleContactFormSubmit = async () => {
  const recaptchaResponse = await grecaptcha.getResponse();

  if (!recaptchaResponse) {
    recaptchaError.value = true;
    setTimeout(() => {
      recaptchaError.value = false;
    }, 5000);

    return;
  }

  sendingMessage.value = true;

  try {
    await $fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify({
        name: contactForm.value.name,
        email: contactForm.value.email,
        message: contactForm.value.message,
      }),
    });

    messageSent.value = true;
    sendingMessage.value = false;
    contactForm.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    sendingMessage.value = false;
    messageSendingError.value = true;
  }

  setTimeout(() => {
    messageSent.value = false;
    messageSendingError.value = false;
  }, 10000);
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
