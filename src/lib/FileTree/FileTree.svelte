<script>
  import TreeItem from '$lib/FileTree/TreeItem.svelte'

  /** @type TreeViewNode[] */
  export let fileTree

  export let onClickLeaf
</script>

<style>
</style>

<section>
  <ul>
    {#each fileTree as treeItem}
      <TreeItem {...treeItem} {onClickLeaf} />
    {/each}
  </ul>
</section>
