<script lang="ts">
  import FileTree from '$lib/components/FileTree/FileTree.svelte'

  export let fileTree
  export let markdownInput
  export let markdownInputTemp
  export let foldersIdList
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
  .folder-view {
    width: 300px;
    flex-shrink: 0;
    margin-right: 10px;
  }
</style>

<div class="folder-view">
  <FileTree {fileTree} onClickLeaf={handleFetchMarkdown} />
</div>
