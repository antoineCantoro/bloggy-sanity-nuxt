// https://nuxt.com/docs/api/configuration/nuxt-config
import {config} from 'dotenv'
import {fileURLToPath} from 'node:url'

config({path: fileURLToPath(new URL('../.env', import.meta.url))})

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
      '@nuxt/ui',
      '@nuxtjs/sanity'
  ],

  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: process.env.SANITY_API_VERSION || '2026-10-15',
    typegen: {
      enabled: true,
      schemaTypesPath: '../studio/schemaTypes',
      queryPaths: ["./app/**/*.{ts,tsx,vue}"],
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
