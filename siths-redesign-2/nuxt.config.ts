// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    sanity: {
      projectId: "cb6mdrtg",
      dataset: "website-data",
      apiVersion: "2024-09-16",
      useCdn: true, //enables the use of a Content Delivery Network (CDN) for loading resources instead of local
    },
  },
});
