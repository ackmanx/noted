<script>
  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  import FolderView from './FolderView.svelte'

  export let isPreviewActive

  export let fileTree

  export let foldersIdList

  export let markdown

  export let currentNoteId

  let markdownInput = markdown

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
  <FolderView
    {fileTree}
    {foldersIdList}
    bind:markdownInput
    bind:markdownInputTemp
    bind:currentNoteId
  />

  <div class="markdown">
    {#if isPreviewActive}
      <article class="prose">
        <MarkdownView markdown={markdownInput} {markdownInputTemp} />
      </article>
    {:else}
      <MarkdownEdit
        bind:markdown={markdownInput}
        bind:markdownInputTemp
        {currentNoteId}
      />
    {/if}
  </div>
</main>
