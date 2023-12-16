/*
 * This was added automatically when adding Tailwind CSS
 * https://www.skeleton.dev/docs/get-started
 */

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
}

module.exports = config
