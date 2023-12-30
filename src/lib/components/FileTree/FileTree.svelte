<script lang="ts">
  import TreeItem from '$lib/components/FileTree/TreeItem.svelte'

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
