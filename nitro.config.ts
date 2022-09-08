import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  storage: {
    fs: {
      driver: 'fs',
      base: './files'
    },
  },
  /* Enable to see ".vercel/output/functions/index.func/chunks/raw/test.mjs" in the built files
  serverAssets: [{
    dir: './files'
  }]
  */
})
