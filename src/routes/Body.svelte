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
  /** @type string */
  let markdownInputTemp
</script>

<style>
  main {
    display: flex;
  }

  .markdown {
    flex-grow: 1;
  }
</style>

<!--
 - Flow:
 - `markdownInput` is reactive. It gets populated initially from FolderView
 - Then it is used for the View mode, getting converted to HTML
 - It's also sent to CodeMirror in Edit mode to be changed
   - Changes are applied to it, which then makes it available for view mode automatically
 -->
<main>
  <FolderView {fileTree} {foldersIdList} bind:markdownInput />

  <div class="markdown">
    {#if isPreviewActive}
      <article class="prose">
        <MarkdownView markdown={markdownInput} {markdownInputTemp} />
      </article>
    {:else}
      <MarkdownEdit bind:markdown={markdownInput} bind:markdownInputTemp />
    {/if}
  </div>
</main>
