<script lang="ts">
  import { page } from '$app/stores'
  import TreeItem from '$lib/components/FileTree/TreeItem.svelte'

  export let onClickLeaf

  const fileTree = $page.data.fileTree
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
