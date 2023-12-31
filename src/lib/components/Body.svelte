<script lang="ts">
  import FolderView from './FolderView.svelte'
  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  export let isPreviewActive: boolean
  export let fileTree: any
  export let foldersIdList: string[]
  export let note: any = undefined

  let currentDirectory
  let markdownInput = note?.markdown
  let markdownInputTemp
  let currentNoteId = note?._id
</script>

<style>
  main {
    display: flex;
  }

  .folder-panel {
    height: calc(100vh - 100px);
    overflow: scroll;
    width: 300px;
    flex-shrink: 0;
    margin-right: 10px;
  }

  .markdown {
    flex-grow: 1;
    height: calc(100vh - 100px);
    background-color: #edf0f5;
    border-radius: 15px;
    padding: 15px;
    overflow: scroll;
  }

  @media (prefers-color-scheme: dark) {
    .markdown {
      background-color: #1f1f1f;
    }
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
  <div class="folder-panel">
    <FolderView
      {fileTree}
      {foldersIdList}
      bind:markdownInput
      bind:markdownInputTemp
      bind:currentNoteId
      bind:currentDirectory
    />
  </div>

  <div class="markdown">
    {#if isPreviewActive}
      <article>
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
