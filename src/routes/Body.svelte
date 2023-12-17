<script>
  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  import { RecursiveTreeView } from '@skeletonlabs/skeleton'
  import FolderView from './FolderView.svelte'

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

  .markdown-view {
    flex-grow: 1;
  }
</style>

<main>
  <FolderView {fileTree} />

  <div class="markdown-view">
    {#if isPreviewActive}
      <MarkdownView markdown={markdownInput} />
    {:else}
      <MarkdownEdit bind:markdown={markdownInput} />
    {/if}
  </div>
</main>
