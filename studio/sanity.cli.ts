import {config} from 'dotenv'
import {fileURLToPath} from 'node:url'
import {defineCliConfig} from 'sanity/cli'

config({path: fileURLToPath(new URL('../.env', import.meta.url))})

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
