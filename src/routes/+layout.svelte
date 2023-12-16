<!--
Layout files run before page files so I guess this is the starting point for the app

<slot /> is the portal that routing places our page files
-->

<script lang="ts">
  import '@fontsource/cabin-sketch'
  import '@fontsource/inter'

  // Contains Tailwind imports that Skeleton UI uses, as well as global CSS I've defined
  import '../app.pcss'
</script>

<div id="app">
  <slot />
</div>
