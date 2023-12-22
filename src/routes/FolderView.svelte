<script>
  import { RecursiveTreeView } from '@skeletonlabs/skeleton'

  /** @type TreeViewNode[] */
  export let fileTree
  /** @type string */
  export let markdownInput
  /** @type string[] */
  export let foldersIdList

  async function handleClick({ detail }) {
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
  <RecursiveTreeView nodes={fileTree} on:click={handleClick} />
</div>
