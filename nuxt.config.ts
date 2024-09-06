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
            apiKey: 'AIzaSyA0Fyfuo7PfLWB0lcV3o8AaltxRj2JWGbw',
            authDomain: 'vue3-f65b5.firebaseapp.com',
            projectId: 'vue3-f65b5',
            storageBucket: 'vue3-f65b5.appspot.com',
            messagingSenderId: '645055557829',
            appId: '1:645055557829:web:be79f7e19fb305130c80ac',
            measurementId: 'G-BEKVVMMTSV'
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