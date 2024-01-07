<script lang="ts">
  import { page } from '$app/stores'
  import FileTree from '$lib/components/FileTree/FileTree.svelte'
  import FileTreeMenu from '$lib/components/FileTreeMenu.svelte'

  const foldersIdList = $page.data.foldersIdList

  export let markdownInput
  export let markdownInputTemp
  export let currentNoteId
  export let currentDirectory

  async function handleFetchMarkdown({ detail }) {
    if (foldersIdList.includes(detail.id)) {
      return
    }

    const response = await fetch(`/api/note/${detail.id}`)
    const fetchedNote = await response.json()

    let fetchedNoteDirectory

    if (fetchedNote.isDirectory) {
      fetchedNoteDirectory = fetchedNote.path
    } else {
      fetchedNoteDirectory = fetchedNote.path.split('/')
      fetchedNoteDirectory.pop()
      fetchedNoteDirectory = fetchedNoteDirectory.join('/')
    }

    currentNoteId = detail.id
    currentDirectory = fetchedNoteDirectory
    markdownInput = fetchedNote.markdown
    markdownInputTemp = undefined
  }
</script>

<style>
  .file-tree-menu-section {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 10px;
    background-color: #efefef;
    padding: 8px;
    border-radius: 5px;
  }

  @media (prefers-color-scheme: dark) {
    .file-tree-menu-section {
      background-color: #444;
    }
  }
</style>

<section>
  <div class="file-tree-menu-section">
    <em>Documents</em>
    <FileTreeMenu />
  </div>
  <FileTree onClickLeaf={handleFetchMarkdown} />
</section>
