<script lang="ts">
  import { page } from '$app/stores'
  import FileTree from '$lib/components/FileTree/FileTree.svelte'

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

<FileTree onClickLeaf={handleFetchMarkdown} />
