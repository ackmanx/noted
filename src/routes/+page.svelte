<script>
  import Header from './Header.svelte'
  import MarkdownView from './MarkdownView.svelte'
  import MarkdownEdit from './MarkdownEdit.svelte'

  /** @type string */
  let markdownInput

  /** @type boolean */
  let isPreviewActive = false
</script>

<svelte:head>
  <title>Mmmm, Noted.</title>
</svelte:head>

<Header bind:isPreviewActive />

<main>
  {#if isPreviewActive}
    <MarkdownView markdown={markdownInput} />
  {:else}
    <MarkdownEdit bind:markdown={markdownInput} />
  {/if}
</main>
