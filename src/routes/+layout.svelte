<!--
Layout files run before page files so I guess this is the starting point for the app

<slot /> is the portal that routing places our page files
-->

<script lang="ts">
  import '@fontsource/cabin-sketch'
  import '@fontsource/inter'

  import '$lib/global.css'
</script>

<div id="app">
  <slot />
</div>
