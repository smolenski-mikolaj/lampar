// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "LAMPAR - Hurtownia Sprzętu Oświetleniowego",
      meta: [
        {
          name: "description",
          content:
            "Zajmujemy się dystrybucją oświetlenia. Oświetlamy obiekty użyteczności publicznej.",
        },
        {
          name: "keywords",
          content:
            "lampar, oświetlenie, usługi oświetleniowe, projekty oświetlenia, osprzęt elektroinstalacyjny, hurtownia, Warszawa, LED, nowoczesne systemy oświetlenia, źródła światła, kable, przewody, listwy, koryta kablowe, lampy, żarówki",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1,  shrink-to-fit=no",
        },
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "ie=edge",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/img/favicon/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap",
        },
      ],
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js",
          async: true,
          defer: true,
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-W4RNG12LBZ",
          async: true,
          defer: true,
        },
        {
          innerHTML:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-W4RNG12LBZ');",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: "firebase",
  },
});
