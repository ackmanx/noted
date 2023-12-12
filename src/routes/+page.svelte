<script>
  import Header from './Header.svelte'
  import MarkdownView from './MarkdownView.svelte'
  import MarkdownEdit from './MarkdownEdit.svelte'

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

<hr />
{JSON.stringify(text)}
<hr />

<main>
  {#if isPreviewActive}
    <MarkdownView markdown={markdownInput} />
  {:else}
    <MarkdownEdit bind:markdown={markdownInput} />
  {/if}
</main>
