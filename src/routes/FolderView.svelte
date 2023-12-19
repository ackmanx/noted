<script>
  import { RecursiveTreeView } from '@skeletonlabs/skeleton'

  /** @type TreeViewNode[] */
  export let fileTree

  async function handleClick({ detail }) {
    const response = await fetch(`/api/note/${detail.id}`)
    /* prettier-ignore */ console.log('^_^', await response.json())
  }
</script>

<style>
  .folder-view {
    width: 300px;
  }
</style>

<div class="folder-view">
  <RecursiveTreeView nodes={fileTree} on:click={handleClick} />
</div>
