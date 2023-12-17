<script>
  import { RecursiveTreeView } from '@skeletonlabs/skeleton'

  /** @type TreeViewNode[] */
  export let fileTree

  function handleClick(something) {
    /* prettier-ignore */ console.log('^_^', something)
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
