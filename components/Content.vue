<template>
  <main>
    <section class="relative flex justify-center bg-gray-100 px-10">
      <Frame>
        <div
          class="-mb-10 grid grid-cols-1 gap-4 pt-6 md:grid-cols-3 md:gap-20 md:pt-12"
        >
          <div
            class="order-2 flex flex-col justify-center text-center md:order-1 md:text-left"
          >
            <h1
              class="mt-2 text-[28px] font-extrabold leading-8 md:mt-0 md:text-[36px] md:leading-10"
            >
              <span class="text-blue-500">Profesjonalnie</span> <br />
              <span class="text-gray-700">oświetlimy Twoje wnętrze</span>
            </h1>
            <h2 class="mt-4 pb-16 text-[15px] text-gray-500">
              Oferujemy wykonanie wszelkich prac elektroinstalacyjnych.
              Sprawdzone przez nas firmy uczciwie i terminowo wykonują
              powierzoną im pracę.
            </h2>
          </div>
          <div
            class="pointer-events-none order-1 flex flex-col items-center justify-center md:order-2 md:col-span-2"
          >
            <img
              class="max-h-[200px] md:my-10 md:max-h-[400px]"
              src="~/assets/img/lamps.svg"
              alt="baner"
            />
          </div>
        </div>
      </Frame>
    </section>
    <section
      class="relative flex justify-center px-6 pt-16 pb-10 md:pb-10 md:pt-32 2xl:pt-40"
    >
      <Frame id="about" class="pt-6">
        <div>
          <div class="flex items-center justify-center text-gray-600">
            <h4
              class="mb-2 text-center text-[24px] font-bold leading-8 text-gray-600 md:text-left md:text-[28px]"
            >
              Istniejemy od 1991 roku
            </h4>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-cols-3 gap-2">
              <div
                class="my-3 flex items-center justify-center rounded-xl bg-gray-800 p-2 sm:p-5"
              >
                <div class="text-center leading-6 text-white">
                  <h4 class="text-[24px] font-bold sm:text-[32px]">400+</h4>
                  <div class="text-sm sm:text-base">realizacji</div>
                </div>
              </div>
              <div
                class="mb-1 mt-4 flex items-center justify-center rounded-xl bg-gray-800 p-2 sm:p-5"
              >
                <div class="text-center leading-6 text-white">
                  <h4 class="text-[24px] font-bold sm:text-[32px]">20+</h4>
                  <div class="text-sm sm:text-base">partnerów</div>
                </div>
              </div>
              <div
                class="my-3 flex items-center justify-center rounded-xl bg-gray-800 p-2 sm:p-5"
              >
                <div class="text-center leading-6 text-white">
                  <h4 class="text-[24px] font-bold sm:text-[32px]">30+</h4>
                  <div class="text-sm sm:text-base">lat w branży</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Frame>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute top-0 -z-10"
      >
        <path
          fill="#f3f4f6"
          fill-opacity="1"
          d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,106.7C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <img
        class="pointer-events-none absolute left-[25%] top-[14%] -z-10 h-12 rotate-12 md:left-[10%] md:top-[20%] md:h-32"
        src="~/assets/img/icons/bulb1.svg"
        alt="żarówka dekoracyjna"
      />
      <img
        class="pointer-events-none absolute right-[30%] top-[92%] -z-10 h-12 -rotate-12 md:right-[15%] md:top-[70%] md:h-32"
        src="~/assets/img/icons/bulb2.svg"
        alt="żarówka dekoracyjna"
      />
    </section>
    <section class="relative flex justify-center px-10 pt-12" id="offer">
      <Frame>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div class="relative">
            <div class="text-center md:sticky md:top-6 md:mt-4 md:text-left">
              <h4
                class="px-4 pb-4 text-[24px] font-bold leading-6 text-gray-600 sm:px-0 md:text-[28px] md:leading-8"
              >
                Realizujemy szeroki zakres
                <span class="text-blue-500">usług</span>
              </h4>
              <p class="pb-4 text-[15px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                sapiente ex hic quia aliquid! Aut maiores similique excepturi
                fugit sit, mollitia aliquid voluptates illum? At quo commodi
                corrupti possimus mollitia!
              </p>
            </div>
          </div>
          <div class="col-span-2 flex justify-center md:block">
            <div class="max-w-[400px] md:max-w-none">
              <ListItem
                >systemy oświetlenia wewnętrznego i zewnętrznego</ListItem
              >
              <ListItem>systemy oświetlenia awaryjnego</ListItem>
              <ListItem>źródła światła</ListItem>
              <ListItem>projekty oświetlenia</ListItem>
              <ListItem
                >osprzęt elektroinstalacyjny renomowanych producentów krajowych
                i zagranicznych</ListItem
              >
              <ListItem>kable i przewody</ListItem>
              <ListItem>listwy i koryta kablowe</ListItem>
              <ListItem
                >rozdzielnie nn, wyłączniki nadmiarowo-prądowe i
                różnicowo-prądowe</ListItem
              >
              <ListItem
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
      class="relative flex justify-center px-10 pt-16 pb-24 text-gray-600 md:pb-40 2xl:pb-64"
    >
      <Frame class="flex flex-col items-center">
        <div>
          <h4 class="mb-4 text-[24px] font-bold md:text-[28px]">
            Nasi partnerzy
          </h4>
        </div>
        <div class="flex flex-col justify-center text-gray-400 sm:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg2759"
            version="1.0"
            viewBox="0 0 500 92"
            class="mx-5 my-2 h-5"
          >
            <defs id="defs2761">
              <clipPath id="clipPath2855">
                <path
                  fill="currentColor"
                  id="path2857"
                  d="m0 595.28h841.89v-595.28h-841.89v595.28z"
                />
              </clipPath>
            </defs>
            <g id="layer1" transform="translate(-127.26 -383.69)">
              <g id="g2851" transform="matrix(1.25 0 0 -1.25 -154.36 849.47)">
                <g id="g2853" clip-path="url(#clipPath2855)">
                  <path
                    id="path2859"
                    d="m360.92 371.16h-21.48v-27.97h-22.36v27.97h-21.48v-70.37h21.48v27.68h22.36v-27.68h21.48v70.37zm74.72-56.23v56.23h-21.48v-70.37h38.84l3.23 14.14h-20.59zm-37.36 56.23h-21.48v-70.37h21.48v70.37zm87.08 0h-21.47v-70.37h21.47v70.37zm105.9-17.96c0 3.83 3.83 5.6 10 5.6 6.77 0 14.13-1.48 19.13-3.55l-1.76 15.32c-5.6 1.18-10.6 2.06-19.71 2.06-17.36 0-29.13-6.85-29.13-21.2 0-24.73 33.55-19.73 33.55-31.21 0-4.41-3.25-6.76-11.19-6.76-7.05 0-17.95 2.35-24.42 5.59l2.36-16.2c6.47-2.36 15.29-3.53 22.36-3.53 17.94 0 32.65 5.89 32.65 23.56 0 23.54-33.84 19.13-33.84 30.32m-60.59-35.63c19.99 0 32.65 10.31 32.65 28.27 0 19.72-13.53 26.79-35.6 26.79-8.53 0-18.83-0.59-26.18-1.47v-70.37h21.48v16.78h7.65zm11.47 27.97c0-9.12-4.41-15.31-15.6-15.31h-3.52v29.08c1.25 0.07 2.42 0.07 3.52 0.07 10.59 0 15.6-5 15.6-13.84m-287.72-27.97c20 0 32.65 10.31 32.65 28.27 0 19.72-13.53 26.79-35.59 26.79-8.54 0-18.83-0.59-26.19-1.47v-70.37h21.48v16.78h7.65zm11.48 27.97c0-9.12-4.42-15.31-15.6-15.31h-3.53v29.08c1.25 0.07 2.43 0.07 3.53 0.07 10.59 0 15.6-5 15.6-13.84"
                    fill="currentColor"
                  />
                </g>
              </g>
            </g>
          </svg>
          <svg
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            id="svg7217"
            viewBox="0 0 750 175"
            class="mx-5 my-2 h-5"
          >
            <defs id="defs7219" />
            <g transform="translate(-1558.05, 890.855)" id="layer1">
              <g transform="translate(17.7165, 17.6477)" id="g7654">
                <path
                  d="M 1745.3116,-787.56904 C 1743.9367,-772.31838 1759.5622,-763.94303 1773.563,-764.19304 C 1783.9382,-764.44306 1796.6889,-766.19314 1798.314,-779.81872 C 1801.5641,-807.06989 1713.1852,-787.44403 1712.5603,-844.19647 C 1712.3101,-874.32275 1742.5615,-891.6985 1771.9379,-890.82344 C 1813.6895,-889.5734 1830.5655,-866.19741 1830.5655,-839.69629 L 1796.4387,-839.69629 C 1796.4387,-839.69629 1799.564,-859.94715 1771.3127,-860.82217 C 1760.6872,-861.07219 1749.3117,-856.82199 1747.9369,-847.07158 C 1744.4365,-821.44548 1831.5653,-840.4463 1832.1905,-782.44382 C 1832.4404,-753.69259 1805.8141,-734.19177 1772.6879,-734.69177 C 1706.9352,-735.56683 1710.8102,-783.56889 1710.5603,-787.56904 L 1745.3116,-787.56904"
                  fill="currentColor"
                  id="path115"
                />
                <path
                  d="M 2230.9574,-822.32054 L 2230.9574,-740.19201 L 2266.7089,-740.19201 L 2266.5838,-886.94831 L 2230.5824,-886.94831 L 2193.8307,-826.69571 L 2159.3293,-886.94831 L 2121.4526,-886.94831 L 2121.4526,-740.31702 L 2158.3294,-740.31702 L 2158.3294,-819.94542 L 2194.3308,-761.81793 L 2230.9574,-822.32054"
                  fill="currentColor"
                  id="path119"
                />
                <path
                  d="M 2061.9503,-886.94831 L 2115.3273,-740.31702 L 2078.7007,-740.31702 L 2070.0757,-765.94312 L 2012.3232,-765.94312 L 2003.4475,-740.31702 L 1966.5711,-740.31702 L 2020.0735,-886.94831 L 2061.9503,-886.94831 z M 2041.3242,-849.94669 L 2022.5733,-796.69444 L 2059.7,-796.69444 L 2041.3242,-850.32172 L 2041.3242,-849.94669"
                  fill="currentColor"
                  style="fill-rule: evenodd; stroke: none"
                  id="path123"
                />
                <path
                  d="M 1903.8183,-787.19401 L 1881.5674,-787.19401 L 1881.5674,-740.31702 L 1847.3159,-740.31702 L 1847.3159,-886.8233 L 1922.3192,-886.8233 C 1949.3205,-886.8233 1970.3213,-863.69729 1968.6962,-835.32108 C 1967.5713,-814.07019 1958.3206,-798.31951 1938.8198,-789.44412 L 1963.3209,-740.31702 L 1925.6945,-740.31702 L 1903.8183,-787.19401 z M 1881.0673,-855.82196 L 1915.9441,-855.82196 C 1926.1942,-855.82196 1933.0695,-846.69656 1933.5696,-836.44612 C 1934.0697,-827.44576 1927.0693,-816.44527 1916.9439,-816.44527 L 1881.0673,-816.44527 L 1881.0673,-855.82196"
                  fill="currentColor"
                  style="fill-rule: evenodd; stroke: none"
                  id="path132"
                />
                <path
                  d="M 1630.0569,-733.44173 C 1673.9337,-733.19171 1703.1849,-768.19323 1702.1847,-811.44506 C 1704.1848,-857.82205 1672.4334,-889.69841 1630.0569,-889.5734 C 1588.805,-889.5734 1557.8035,-857.19701 1558.0538,-811.44506 C 1557.5537,-766.31814 1586.8049,-731.94167 1630.0569,-733.44173 z M 1630.0569,-858.69707 C 1655.9328,-859.0721 1666.8082,-835.44609 1666.6835,-811.57007 C 1665.1831,-789.69414 1655.1829,-765.5681 1629.9318,-765.31808 C 1605.0556,-765.31808 1593.555,-788.69411 1593.1801,-811.44506 C 1593.555,-834.32105 1604.1805,-859.0721 1630.0569,-858.69707"
                  fill="currentColor"
                  id="path141"
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.385 -0.218 680 180"
            id="svg2"
            xml:space="preserve"
            class="mx-5 my-2 h-5"
          >
            <defs id="defs4"></defs>
            <g id="g6">
              <path
                d="M 164.437,20.22 L 164.437,155.61 L 233.421,155.61 C 256.28,155.61 274.576,141.875 274.576,118.911 C 274.576,92.314 249.776,82.666 249.776,82.666 C 249.776,82.666 270.86,74.595 270.86,51.865 C 270.86,34.067 255.797,20.219 238.226,20.219 L 164.437,20.219 M 194.281,45.449 L 194.281,71.489 L 228.446,71.489 C 237.736,71.489 242.53,64.507 242.53,58.447 C 242.53,52.387 238.421,45.449 228.641,45.449 L 194.281,45.449 L 194.281,45.449 z M 194.281,95.425 L 194.281,129.243 L 228.051,129.243 C 239.301,129.243 245.466,121.206 245.466,112.212 C 245.466,103.218 237.932,95.425 228.542,95.425 L 194.281,95.425 L 194.281,95.425 z "
                fill="currentColor"
                style="fill-rule: evenodd"
                id="path8"
              />
              <path
                d="M 285.372,53.887 L 285.372,155.61 L 314.037,155.61 C 314.037,155.61 314.037,106.054 314.037,99.697 C 314.037,90.41 319.796,83.994 324.332,80.639 C 331.737,75.16 342.596,76.625 342.596,76.625 L 342.596,51.118 C 342.596,51.118 333.502,50.239 326.651,53.887 C 317.086,58.985 313.445,67.344 313.445,67.344 L 313.445,53.887 L 285.372,53.887"
                fill="currentColor"
                id="path10"
              />
              <rect
                width="28.364"
                height="135.39101"
                x="395.711"
                y="20.219999"
                fill="currentColor"
                id="rect12"
              />
              <rect
                width="28.367001"
                height="135.39101"
                x="441.48499"
                y="20.219999"
                fill="currentColor"
                id="rect14"
              />
              <rect
                width="28.365"
                height="101.729"
                x="349.56601"
                y="53.887001"
                fill="currentColor"
                id="rect16"
              />
              <rect
                width="28.365"
                height="22.979"
                x="349.56601"
                y="20.219999"
                fill="currentColor"
                id="rect18"
              />
              <path
                d="M 484.471,53.887 C 484.471,53.887 484.471,110.562 484.471,124.043 C 484.471,143.101 499.004,158.843 518.174,158.843 C 539.596,158.843 547.324,142.613 547.324,142.613 L 547.324,155.611 L 574.221,155.611 L 574.221,53.887 L 545.705,53.887 C 545.705,53.887 545.705,110.552 545.705,118.858 C 545.705,127.169 539.011,135.284 529.518,135.284 C 520.034,135.284 512.99,126.871 512.99,119.737 C 512.99,112.603 512.99,53.887 512.99,53.887 L 484.471,53.887"
                fill="currentColor"
                id="path20"
              />
              <polyline
                points="584.281,54.126 614.131,102.246 578.288,155.61 609.925,155.61 628.827,125.19 648.026,155.61     678.89,155.61 643.336,102.007 673.131,54.126 644.385,54.126 628.711,82.251 613.086,54.126 584.281,54.126 "
                id="polyline22"
                fill="currentColor"
              />
              <rect
                width="134.00101"
                height="133.911"
                x="0.875"
                y="21.455"
                fill="currentColor"
                id="rect24"
              />

              <rect
                width="134.00101"
                height="133.911"
                x="0.875"
                y="21.455"
                style="
                  fill: none;
                  stroke: #6f7682;
                  stroke-width: 1.75;
                  stroke-miterlimit: 3.86400008;
                "
                id="rect26"
              />
              <polyline
                fill="#6f7682"
                points="0.021,83.828 83.9,0 83.9,66.421 0.021,156.138 0.021,83.828 "
                id="polyline28"
              />
              <polyline
                fill="#6f7682"
                points="135.677,20.654 50.455,110.376 50.455,178.936 135.682,90.288 135.677,20.654 "
                id="polyline30"
              />
            </g>
          </svg>
          <svg
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="0 0 250 62"
            class="mx-5 my-2 h-5"
          >
            <path
              d="M 12.45,0 L 12.45,15.13 L 15.14,15.13 L 15.14,0 L 12.45,0 z M 16.65,3.59 L 16.65,15.09 L 28.77,15.09 L 28.77,45.18 L 39.8,45.18 L 39.8,3.59 L 16.65,3.59 z M 0,3.64 L 0,45.23 L 23.11,45.23 L 23.11,33.73 L 10.99,33.73 L 10.99,3.64 L 0,3.64 z M 24.62,33.68 L 24.62,48.86 L 27.3,48.86 L 27.3,33.68 L 24.62,33.68 z"
              fill="currentColor"
              style="fill-opacity: 1; fill-rule: nonzero; stroke: none"
            />
            <path
              d="M 54.19,2.41 L 54.19,47.31 L 63.94,47.31 L 63.94,2.41 L 54.19,2.41 z M 226.08,2.41 L 226.08,17.31 C 223.98,15.78 220.57,15.53 220.57,15.53 C 210.07,15.26 205.59,24.14 205.62,31.09 C 205.54,40.2 211.55,47.64 220.53,46.93 C 222.62,46.71 224.34,45.89 226.08,44.52 L 226.08,47.31 L 236.27,47.31 L 236.27,2.41 L 226.08,2.41 z M 81.49,13.26 C 73.5,13.26 65.65,19.83 65.65,30.18 C 65.66,41.83 72.95,48.58 82.58,48.29 C 89.93,48.05 95.02,43.4 96.87,36.88 L 86.82,36.88 C 86.31,37.92 84.9,39.14 81.96,39.14 C 78.2,39.14 76.21,36.35 76.21,33.58 L 97.43,33.58 C 98.64,21.49 90.85,13.26 81.49,13.26 z M 152.8,13.91 C 147.67,13.91 143.46,17.84 143.46,17.84 L 143.46,14.49 L 133,14.49 L 133,47.31 L 143.46,47.31 L 143.46,30.56 C 143.53,22.38 152.8,21.79 152.8,21.79 L 152.8,13.91 z M 155.2,13.91 L 155.2,21.56 C 155.2,21.56 156.1,21.34 159.88,21.46 C 164.68,21.64 164.12,25.56 164.12,25.56 C 164.12,25.56 161.78,24.13 158.41,24.1 C 154.73,24.01 147.34,26.26 147.34,36.04 C 147.32,44.65 154.23,47.16 158.32,47.16 C 162.26,47.16 164.54,45.23 164.54,45.23 L 164.54,47.31 L 174.06,47.31 C 174.06,47.31 174.06,29.64 174.06,24.94 C 174.06,20.6 173.26,19.42 171.28,17.22 C 168.51,14.17 161.94,13.91 161.94,13.91 L 155.2,13.91 z M 120.68,14.44 L 120.68,17.88 C 113.94,11.06 98.2,15.99 98.76,31.37 C 99.24,45.77 114.47,50.1 120.68,44.52 L 120.68,48.33 C 120.65,52.7 115.31,52.55 115.31,52.55 C 110.65,52.33 109.65,49.38 109.65,49.38 L 97.9,49.38 C 100.36,65.78 129.14,66.41 130.49,50.7 L 130.49,14.44 L 120.68,14.44 z M 176.33,14.44 L 176.33,47.31 L 186.38,47.31 L 186.38,27.92 C 186.38,23.24 193.83,22.92 193.83,27.92 L 193.83,47.31 L 203.73,47.31 L 203.73,22.74 C 203.73,17.78 197.27,10.49 186.38,17.55 L 186.38,14.44 L 176.33,14.44 z M 81.49,21.88 C 84.3,21.88 86.61,23.98 86.91,26.69 L 76.08,26.69 C 76.39,23.98 78.69,21.88 81.49,21.88 z M 114.6,24.58 C 118.1,24.58 120.97,27.42 120.97,30.93 C 120.97,34.45 118.1,37.26 114.6,37.26 C 111.09,37.26 108.28,34.45 108.28,30.93 C 108.28,27.42 111.09,24.58 114.6,24.58 z M 220.42,24.85 C 223.91,24.85 226.74,27.71 226.74,31.22 C 226.74,34.71 223.91,37.54 220.42,37.54 C 216.92,37.54 214.1,34.71 214.1,31.22 C 214.11,27.71 216.92,24.85 220.42,24.85 z M 160.43,30.98 C 162.76,30.98 164.63,32.91 164.63,35.24 C 164.63,37.58 162.76,39.43 160.43,39.43 C 158.1,39.43 156.19,37.58 156.19,35.24 C 156.19,32.91 158.1,30.98 160.43,30.98 z"
              fill="currentColor"
              style="fill-opacity: 1; fill-rule: nonzero; stroke: none"
            />
            <path
              d="M 244.28,2.46 C 241.17,2.46 238.58,5.04 238.58,8.16 C 238.58,11.32 241.17,13.87 244.28,13.87 C 247.45,13.87 250,11.32 250,8.16 C 250,5.04 247.43,2.46 244.28,2.46 z M 244.28,3.26 C 247,3.26 249.2,5.49 249.2,8.16 C 249.2,10.86 246.98,13.02 244.28,13.02 C 241.59,13.02 239.39,10.86 239.39,8.16 C 239.38,5.49 241.58,3.26 244.28,3.26 z M 242.02,5.1 L 242.02,11.09 L 242.83,11.09 L 242.83,8.49 L 244.76,8.49 C 245.71,8.49 245.85,9.08 245.85,9.58 C 245.85,9.81 245.85,10.73 245.99,11.09 L 246.98,11.09 L 246.98,10.94 C 246.72,10.79 246.66,10.68 246.65,10.34 L 246.6,9.25 C 246.57,8.42 246.23,8.25 245.89,8.12 C 246.27,7.89 246.74,7.59 246.74,6.7 C 246.74,5.43 245.71,5.1 244.76,5.1 L 242.02,5.1 z M 242.83,5.76 L 244.81,5.76 C 245.23,5.76 245.89,5.88 245.89,6.79 C 245.89,7.68 245.28,7.83 244.67,7.83 L 242.83,7.83 L 242.83,5.76 z"
              style="
                fill: #888689;
                fill-opacity: 1;
                fill-rule: nonzero;
                stroke: none;
              "
            />
          </svg>
        </div>
      </Frame>
      <svg
        class="absolute bottom-0 -z-10"
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
      <Frame>
        <h4
          class="mb-8 pt-4 text-[24px] font-bold text-gray-600 md:text-[28px]"
        >
          Nasze <span class="text-blue-500">realizacje</span>
        </h4>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a href="#">
            <div
              class="relative h-[200px] rounded-xl bg-[url('/img/pexels-boris-ulzibat-4281932.jpg')] bg-cover bg-center bg-no-repeat"
            >
              <div
                class="absolute bottom-0 left-0 h-[50px] w-full rounded-b-xl bg-gradient-to-t from-blue-500 to-transparent"
              >
                <span
                  class="absolute bottom-2 left-0 w-full text-center text-white"
                  >Realizacja nr 1</span
                >
              </div>
            </div>
          </a>
          <a href="#">
            <div
              class="relative mt-2 h-[200px] rounded-xl bg-[url('/img/pexels-markus-winkler-5037900.jpg')] bg-cover bg-center bg-no-repeat"
            >
              <div
                class="absolute bottom-0 left-0 h-[50px] w-full rounded-b-xl bg-gradient-to-t from-blue-500 to-transparent"
              >
                <span
                  class="absolute bottom-2 left-0 w-full text-center text-white"
                  >Realizacja nr 2</span
                >
              </div>
            </div>
          </a>
          <a href="#">
            <div
              class="relative -mt-2 h-[200px] rounded-xl bg-[url('/img/pexels-boris-ulzibat-4281932.jpg')] bg-cover bg-center bg-no-repeat"
            >
              <div
                class="absolute bottom-0 left-0 h-[50px] w-full rounded-b-xl bg-gradient-to-t from-blue-500 to-transparent"
              >
                <span
                  class="absolute bottom-2 left-0 w-full text-center text-white"
                  >Realizacja nr 3</span
                >
              </div>
            </div>
          </a>
          <a href="#">
            <div
              class="relative h-[200px] rounded-xl bg-[url('/img/pexels-markus-winkler-5037900.jpg')] bg-cover bg-center bg-no-repeat"
            >
              <div
                class="absolute bottom-0 left-0 h-[50px] w-full rounded-b-xl bg-gradient-to-t from-blue-500 to-transparent"
              >
                <span
                  class="absolute bottom-2 left-0 w-full text-center text-white"
                  >Realizacja nr 4</span
                >
              </div>
            </div>
          </a>
        </div>
      </Frame>
    </section>
    <section class="flex justify-center bg-gray-100 py-12 pt-12 text-center">
      <Frame>
        <h4 class="text-[24px] font-bold text-gray-600 md:text-[28px]">
          Jak pracujemy?
        </h4>
        <div class="flex justify-center">
          <div class="grid grid-cols-3 gap-4">
            <div
              class="relative my-3 flex items-center justify-center p-2 sm:p-5"
            >
              <div class="text-center text-gray-500">
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
              <div class="text-center text-gray-500">
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
              <div class="text-center text-gray-500">
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
    </section>
    <section class="flex justify-center bg-gray-100 px-10 pb-10" id="contact">
      <Frame wide class="rounded-xl p-5 text-gray-700">
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-12">
          <div class="mb-20 md:mb-0">
            <div class="text-center md:text-left">
              <h4
                class="text-[24px] font-bold leading-tight text-gray-600 md:text-[28px]"
              >
                Kontakt
              </h4>
              <p class="pb-6 text-sm text-gray-500 sm:text-base">
                Z chęcią odpowiemy na Twoje pytania
              </p>
            </div>

            <div class="mb-2">
              <label for="name" class="text-left text-sm text-gray-500"
                >Imię i nazwisko</label
              >
              <div>
                <input
                  class="w-full rounded-md border bg-white p-2 focus:border-gray-300 focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
            </div>

            <div class="mb-2">
              <label for="email" class="text-left text-sm text-gray-500"
                >Adres email</label
              >
              <div>
                <input
                  class="w-full rounded-md border bg-white p-2 focus:border-gray-300 focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
            </div>

            <div class="mb-2">
              <label for="message" class="text-left text-sm text-gray-500"
                >Treść wiadomości</label
              >
              <div>
                <textarea
                  class="w-full rounded-md border bg-white p-2 focus:border-gray-300 focus:outline-none"
                  type="text"
                  name="message"
                  id="message"
                  rows="6"
                ></textarea>
              </div>
            </div>

            <div class="text-center md:text-left">
              <button
                class="rounded bg-gray-600 py-2 px-4 font-bold text-white focus:bg-gray-800 focus:outline-none"
              >
                Wyślij
              </button>
            </div>
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
