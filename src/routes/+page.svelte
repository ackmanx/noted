<script lang="ts">
  import Body from '$lib/components/Body.svelte'
  import Header from '$lib/components/Header.svelte'

  let isPreviewActive = true
</script>

<svelte:head>
  <title>Mmmm, Noted.</title>
</svelte:head>

<Header bind:isPreviewActive />

<Body {isPreviewActive} />
