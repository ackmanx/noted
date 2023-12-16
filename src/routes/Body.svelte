<script>
  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  /** @type boolean */
  export let isPreviewActive
  /** @type string */
  export let markdownInput
</script>

<main>
  {#if isPreviewActive}
    <MarkdownView markdown={markdownInput} />
  {:else}
    <MarkdownEdit bind:markdown={markdownInput} />
  {/if}
</main>
