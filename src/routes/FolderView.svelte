<script>
  import FileTree from '$lib/FileTree/FileTree.svelte'

  /** @type TreeViewNode[] */
  export let fileTree
  /** @type string */
  export let markdownInput
  /** @type string[] */
  export let foldersIdList

  async function handleFetchMarkdown({ detail }) {
    if (foldersIdList.includes(detail.id)) {
      return
    }

    const response = await fetch(`/api/note/${detail.id}`)
    const json = await response.json()

    markdownInput = json.markdown
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
