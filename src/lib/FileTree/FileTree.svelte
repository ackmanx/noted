<script>
  import TreeItem from '$lib/FileTree/TreeItem.svelte'

  /** @type TreeViewNode[] */
  export let fileTree

  export let onClickLeaf
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<section>
  <ul>
    {#each fileTree as treeItem}
      <TreeItem {...treeItem} {onClickLeaf} />
    {/each}
  </ul>
</section>
