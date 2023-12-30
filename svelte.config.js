import sveltePreprocess from 'svelte-preprocess'

import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  // Tell Svelte to pre-process TS scripts before building, because Svelte only understands JS
  preprocess: sveltePreprocess(),
}

export default config
