<script>
  import ArrowUp from '$lib/images/ArrowUp.svelte'

  export let id = ''
  export let isLeaf = false
  export let fileName = ''
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

  function handleRightClick(event) {
    event.preventDefault()
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    cursor: pointer;
    user-select: none;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    /* padding-left dynamically set below */

    &:hover {
      color: red;
    }
  }

  div {
    flex-shrink: 0;
    width: 22px;
    transition: transform 150ms ease-in;
  }

  .open {
    transform: rotate(90deg);
  }
</style>

<li
  style="padding-left: {indent}px"
  on:click={toggleOpen}
  on:contextmenu={handleRightClick}
>
  <div class:open>
    {#if children.length}
      <ArrowUp />
    {/if}
  </div>

  {fileName}
</li>

{#if open}
  <ul>
    {#each children as child}
      <svelte:self {...child} indent={indent + 24} {onClickLeaf} />
    {/each}
  </ul>
{/if}
