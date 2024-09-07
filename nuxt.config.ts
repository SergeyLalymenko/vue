// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    alias: {
        "~": fileURLToPath(new URL('.', import.meta.url)),
        "@": fileURLToPath(new URL('./src', import.meta.url)),
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
    },
    modules: [
        '@nuxt/fonts',
        '@nuxt/image',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate']
            }
        ],
        'nuxt-lodash',
        '@nuxtjs/tailwindcss',
        'nuxt-vuefire'
    ],
    vuefire: {
        auth: {
            enabled: true,
            sessionCookie: true
        },
        config: {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID,
            measurementId: process.env.MEASUREMENT_ID
        },
    },
    imports: {
        dirs: ['stores']
    },
    css: ['~/assets/styles/index.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "~/assets/styles/variables.scss" as *;
                    `
                }
            }
        }
    },
    devServer: {
        port: 8000
    },
    lodash: {
        prefix: "_",
        upperAfterPrefix: false
    },
    fonts: {
        families: [
            {
                name: 'rubik',
                provider: 'google'
            },
        ]
    }
})