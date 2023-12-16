<script>
  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  /** @type boolean */
  export let isPreviewActive
  /** @type string */
  export let markdownInput
</script>

<style>
  main {
    display: flex;
    /*flex-direction: column;*/
  }

  .folder-view {
    width: 300px;
    border: 1px solid black;
  }

  .markdown-view {
    flex-grow: 1;
    border: 1px solid black;
  }
</style>

<main>
  <div class="folder-view">folder view</div>

  <div class="markdown-view">
    {#if isPreviewActive}
      <MarkdownView markdown={markdownInput} />
    {:else}
      <MarkdownEdit bind:markdown={markdownInput} />
    {/if}
  </div>
</main>
