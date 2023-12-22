<script>
  import { RecursiveTreeView } from '@skeletonlabs/skeleton'

  /** @type TreeViewNode[] */
  export let fileTree
  /** @type string */
  export let markdownInput

  async function handleClick({ detail }) {
    const response = await fetch(`/api/note/${detail.id}`)
    const json = await response.json()

    markdownInput = json.markdown
  }
</script>

<style>
  .folder-view {
    width: 300px;
    margin-right: 10px;
  }
</style>

<div class="folder-view">
  <RecursiveTreeView nodes={fileTree} on:click={handleClick} />
</div>
