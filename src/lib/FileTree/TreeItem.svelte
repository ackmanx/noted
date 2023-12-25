<script>
  export let id = ''
  export let isLeaf = false
  export let content = ''
  export let children = []
  export let indent = 0
  export let onClickLeaf

  let open = false

  function toggleOpen(event) {
    event.stopPropagation()

    if (isLeaf) {
      onClickLeaf({ detail: { id } })
    } else {
      open = !open
    }
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    cursor: pointer;
    user-select: none;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;

    &:hover {
      border: 1px solid red;
    }
  }
</style>

<li style="padding-left: {indent}px" on:click={toggleOpen}>
  {content}

  {#if open}
    <ul>
      {#each children as child}
        <svelte:self {...child} indent={indent + 24} {onClickLeaf} />
      {/each}
    </ul>
  {/if}
</li>
