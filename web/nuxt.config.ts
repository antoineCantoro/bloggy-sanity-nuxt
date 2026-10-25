// https://nuxt.com/docs/api/configuration/nuxt-config
import {config} from 'dotenv'
import {fileURLToPath} from 'node:url'
import { createClient } from '@sanity/client'
import 'nuxt/schema'


config({path: fileURLToPath(new URL('../.env', import.meta.url))})

declare module 'nuxt/schema' {
  interface RuntimeConfig {
    altchaHmacSecret: string
    altchaHmacKeySecret: string
    brevoApiKey: string
  }
}

const sanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || '2026-10-15',
  useCdn: false // Indispensable au build pour ignorer le cache
})

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/sanity',
    '@nuxt/fonts'
  ],

  fonts: {
    families: [
      {
        name: 'PPNeueMontreal',
        src: '/fonts/PPNeueMontreal-Regular.woff2',
        weight: 400,
        style: 'normal',
        display: 'swap'
      },
      {
        name: 'PPNeueMontreal',
        src: '/fonts/PPNeueMontreal-Bold.woff2',
        weight: 700,
        style: 'normal',
        display: 'swap'
      }
    ]
  },

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

  hooks: {
    async 'prerender:routes'(ctx) {
      const query = `{
        "blogItemPage": *[_type == "blogItemPage" && defined(slug.current)].slug.current
      }`

      try {
        const data = await sanityClient.fetch<{ blogItemPage: string[] }>(query)

        for (const slug of data.blogItemPage) {
          ctx.routes.add(`/articles/${slug}`)
        }

        console.log(`[Sanity SSG] ${data.blogItemPage.length} blog-item pages pre-rendered.`)
      } catch (error) {
        console.error('[Sanity SSG] Error fetching blog-item routes :', error)
      }
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['@lucide/vue']
  },

  routeRules: {
    '/': { prerender: true },
    // '/blog/**': { prerender: true, noScripts: true },
    '/articles/**': {
      prerender: true,
      noScripts: true
    }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'altcha-widget',
    },
  },

  runtimeConfig: {
    server: {
      altchaHmacSecret: process.env.ALTCHA_HMAC_SECRET,
      altchaHmacKeySecret: process.env.ALTCHA_HMAC_KEY_SECRET,
      brevoApiKey: process.env.BREVO_API_KEY,
      brevoListId: process.env.BREVO_LIST_ID,
    }
  },

  // plugins: [vue({
  //   template: {
  //     compilerOptions: {
  //       isCustomElement: (tag) => tag.indexOf('-') >= 0
  //     }
  //   }
  // })],

})
