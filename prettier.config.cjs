module.exports = {
  semi: false,
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  // Intellij cannot format Svelte files with prettier without explicitly referencing the plugin
  plugins: ['prettier-plugin-svelte', '@trivago/prettier-plugin-sort-imports'],
  svelteSortOrder: 'options-scripts-styles-markup',
  // trivago/prettier-plugin-sort-imports
  importOrder: ['<THIRD_PARTY_MODULES>', '^[@]', '^[$]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
