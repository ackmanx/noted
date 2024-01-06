<script lang="ts">
  import { page } from '$app/stores'
  import FileTree from '$lib/components/FileTree/FileTree.svelte'
  import ThreeDotMenu from '$lib/images/ThreeDotMenu.svelte'

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
  .menu {
    display: flex;
    justify-content: right;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 10px;
  }
</style>

<section>
  <div class="menu">
    <ThreeDotMenu />
  </div>
  <FileTree onClickLeaf={handleFetchMarkdown} />
</section>
