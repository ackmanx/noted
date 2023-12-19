<script>
  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  import FolderView from './FolderView.svelte'

  /** @type boolean */
  export let isPreviewActive
  /** @type TreeViewNode[] */
  export let fileTree

  /** @type string */
  let markdownInput
</script>

<style>
  main {
    display: flex;
  }

  .markdown-view {
    flex-grow: 1;
  }
</style>

<main>
  <FolderView {fileTree} bind:markdownInput />

  <div class="markdown-view">
    {#if isPreviewActive}
      <MarkdownView markdown={markdownInput} />
    {:else}
      <MarkdownEdit bind:markdown={markdownInput} />
    {/if}
  </div>
</main>
