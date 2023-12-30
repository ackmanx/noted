// import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

const config = {
  kit: {
    adapter: adapter(),
    // This is necessary to use TypeScript in .svelte files
    // Without it TS will work in .ts files, but server will error out when a Svelte file encounters TS
    // preprocess: sveltePreprocess(),
  },
}

export default config
