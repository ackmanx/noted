<script>
  /**
   * @typedef {import("@skeletonlabs/skeleton").TreeViewNode} TreeViewNode
   */

  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  import { RecursiveTreeView } from '@skeletonlabs/skeleton'

  /** @type boolean */
  export let isPreviewActive
  /** @type string */
  export let markdownInput
  /** @type TreeViewNode[] */
  export let fileTree
</script>

<style>
  main {
    display: flex;
  }

  .folder-view {
    width: 300px;
  }

  .markdown-view {
    flex-grow: 1;
  }
</style>

<main>
  <div class="folder-view">
    <RecursiveTreeView nodes={fileTree} />
  </div>

  <div class="markdown-view">
    {#if isPreviewActive}
      <MarkdownView markdown={markdownInput} />
    {:else}
      <MarkdownEdit bind:markdown={markdownInput} />
    {/if}
  </div>
</main>
