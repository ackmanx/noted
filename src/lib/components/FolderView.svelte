<script lang="ts">
  import { page } from '$app/stores'
  import FileTree from '$lib/components/FileTree/FileTree.svelte'
  import FileTreeMenu from '$lib/components/FileTreeMenu.svelte'

  const foldersIdList = $page.data.foldersIdList

  export let markdownInput
  export let markdownInputTemp
  export let currentNoteId
  export let currentDirectory

  let newFilename = ''
  let showNewFileInput = false
  let isSaveSuccessful = undefined

  function handleShowNewFileInput() {
    showNewFileInput = true
  }

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

  async function handleNewFilenameInput(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter': {
        try {
          const response = await fetch(
            `/api/note/too-lazy-to-make-another-route`,
            {
              method: 'PUT',
              body: JSON.stringify({
                markdown: '',
                path: newFilename.includes('.md')
                  ? newFilename
                  : `${newFilename}.md`,
              }),
            }
          )

          isSaveSuccessful = response.status === 200
        } catch (error) {
          isSaveSuccessful = false
        } finally {
          setTimeout(() => (isSaveSuccessful = undefined), 3000)
        }

        break
      }
      case 'Escape': {
        showNewFileInput = false
        newFilename = ''
        break
      }
      default: {
        newFilename = (event.target as HTMLInputElement).value
      }
    }
  }
</script>

<style>
  .file-tree-menu-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  input {
    margin: 8px 8px 8px 22px;
    height: 32px;
    width: 85%;
    font-size: 16px;
    padding-left: 5px;
  }
</style>

<section>
  <div class="file-tree-menu-section">
    <em>Documents</em>
    <FileTreeMenu showNewFileInput={handleShowNewFileInput} />
  </div>

  {#if isSaveSuccessful}
    Success!
  {:else if isSaveSuccessful === false}
    Failure!
  {/if}

  {#if showNewFileInput}
    <input type="text" value={newFilename} on:keyup={handleNewFilenameInput} />
  {/if}

  <FileTree onClickLeaf={handleFetchMarkdown} />
</section>
