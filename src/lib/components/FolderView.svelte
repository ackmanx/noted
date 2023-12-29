<script>
  import FileTree from '$lib/components/FileTree/FileTree.svelte'

  /** @type TreeViewNode[] */
  export let fileTree
  /** @type string | undefined */
  export let markdownInput
  /** @type string | undefined */
  export let markdownInputTemp
  /** @type string[] */
  export let foldersIdList

  async function handleFetchMarkdown({ detail }) {
    if (foldersIdList.includes(detail.id)) {
      return
    }

    window.location.href = `/note/${detail.id}`
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
