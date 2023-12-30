<script lang="ts">
  import Body from '$lib/components/Body.svelte'
  import Header from '$lib/components/Header.svelte'

  let isPreviewActive = true

  // +page components receive props from their respective +page.server file
  export let data

  // Is $: necessary here? What's it do here?
  $: ({ fileTree } = data)
  $: ({ foldersIdList } = data)
</script>

<svelte:head>
  <title>Mmmm, Noted.</title>
</svelte:head>

<Header bind:isPreviewActive />

<Body {isPreviewActive} {fileTree} {foldersIdList} />
