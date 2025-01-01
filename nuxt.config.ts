// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@unocss/nuxt'],
  vuetify: {
    moduleOptions: {
      /* module specific options */
      defaultIconSet: 'mdi', 

    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
        sets: ['mdi', 'fa']
      }
    }
  }
})