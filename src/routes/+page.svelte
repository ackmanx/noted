<script>
  import Header from './Header.svelte'
  import Body from './Body.svelte'

  /** @type string */
  let markdownInput

  /** @type boolean */
  let isPreviewActive = true

  // +page components receive props from their respective +page.server file
  export let data

  // Is $: necessary here? What's it do here?
  $: ({ text } = data)
</script>

<svelte:head>
  <title>Mmmm, Noted.</title>
</svelte:head>

<Header bind:isPreviewActive />

<Body {isPreviewActive} {markdownInput} />
