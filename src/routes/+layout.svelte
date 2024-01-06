<!--
Layout files run before page files so I guess this is the starting point for the app

<slot /> is the portal that routing places our page files
-->

<script lang="ts">
  import '@fontsource-variable/inter'
  import '@fontsource/cabin-sketch'

  import '$lib/global.css'
  import '$lib/markdown-theme.css'
</script>

<div id="app">
  <slot />
</div>
