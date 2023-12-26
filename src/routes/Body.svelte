<script>
  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  import FolderView from './FolderView.svelte'

  /** @type boolean */
  export let isPreviewActive
  /** @type TreeViewNode[] */
  export let fileTree
  /** @type string[] */
  export let foldersIdList

  /* prettier-ignore */ console.log('^_^', fileTree)

  /** @type string */
  let markdownInput
</script>

<style>
  main {
    display: flex;
  }

  .markdown {
    flex-grow: 1;
  }
</style>

<main>
  <FolderView {fileTree} {foldersIdList} bind:markdownInput />

  <div class="markdown">
    {#if isPreviewActive}
      <article class="prose">
        <MarkdownView markdown={markdownInput} />
      </article>
    {:else}
      <MarkdownEdit bind:markdown={markdownInput} />
    {/if}
  </div>
</main>
