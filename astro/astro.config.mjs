// @ts-check

import { loadEnvFile } from 'node:process';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import sanity from '@sanity/astro';

loadEnvFile(fileURLToPath(new URL('../.env', import.meta.url)));

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(), 
        sitemap(), 
        sanity({
            projectId: process.env.SANITY_STUDIO_PROJECT_ID,
            dataset: process.env.SANITY_STUDIO_DATASET,
            apiVersion: process.env.SANITY_API_VERSION || '2026-10-15',
            token: process.env.SANITY_API_TOKEN,
        })],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
});