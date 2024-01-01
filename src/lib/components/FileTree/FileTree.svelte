<script lang="ts">
  import { page } from '$app/stores'
  import TreeItem from '$lib/components/FileTree/TreeItem.svelte'

  export let onClickLeaf

  const fileTree = $page.data.fileTree
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
