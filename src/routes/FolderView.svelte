<script>
  import FileTree from '$lib/FileTree/FileTree.svelte'

  /** @type TreeViewNode[] */
  export let fileTree
  /** @type string */
  export let markdownInput
  /** @type string[] */
  export let foldersIdList

  let isContextMenuOpen = false
  let mouseXY = {}

  async function handleFetchMarkdown({ detail }) {
    if (foldersIdList.includes(detail.id)) {
      return
    }

    const response = await fetch(`/api/note/${detail.id}`)
    const json = await response.json()

    markdownInput = json.markdown
  }

  function handleRightClick(event) {
    event.preventDefault()

    mouseXY.x = event.clientX
    mouseXY.y = event.clientY

    isContextMenuOpen = !isContextMenuOpen
  }
</script>

<style>
  .folder-view {
    width: 300px;
    min-height: 100vh;
    flex-shrink: 0;
    margin-right: 10px;
  }

  .context-menu {
    position: absolute;
    top: var(--mouseY);
    left: var(--mouseX);
    background-color: white;
    color: black;
  }
</style>

<div
  class="folder-view"
  on:click={handleRightClick}
  on:contextmenu={handleRightClick}
>
  {#if isContextMenuOpen}
    <div
      class="context-menu"
      style="--mouseX: {mouseXY.x}px; --mouseY: {mouseXY.y}px;"
    >
      hello there
    </div>
  {/if}
  <FileTree {fileTree} onClickLeaf={handleFetchMarkdown} />
</div>
