<script>
  export let id = ''
  export let isLeaf = false
  export let content = ''
  export let children = []
  export let indent = 0
  export let onClickLeaf

  let open = true

  function toggleOpen(event) {
    event.stopPropagation()

    /* prettier-ignore */ console.log('^_^', 'toggle open for', content)
    open = !open

    if (isLeaf) {
      onClickLeaf({ detail: { id } })
    }
  }
</script>

<style>
  li {
    cursor: pointer;
    user-select: none;
  }
</style>

<li style="padding-left: {indent}px" on:click={toggleOpen}>
  {content}
  {open}

  {#if open}
    <ul>
      {#each children as child}
        <svelte:self {...child} indent={indent + 24} {onClickLeaf} />
      {/each}
    </ul>
  {/if}
</li>
