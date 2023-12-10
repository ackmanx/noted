module.exports = {
  semi: false,
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  // Once Intellij can handle the prettier svelte plugin, I can upgrade to prettier v3
  // Breaking change for that is requiring a plugins array vs v2 where it autodetects
  // plugins: ['prettier-plugin-svelte', '@trivago/prettier-plugin-sort-imports'],
  svelteSortOrder: 'options-scripts-styles-markup',
  // trivago/prettier-plugin-sort-imports
  importOrder: ['<THIRD_PARTY_MODULES>', '^[@]', '^[$]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
