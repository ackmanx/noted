import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  // Tell Svelte to pre-process TS scripts before building, because Svelte only understands JS
  preprocess: [vitePreprocess()],
}

export default config
