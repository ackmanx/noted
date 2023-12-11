<script>
  /** @type boolean */
  export let isPreviewActive
</script>

<style>
  header {
    font-family: 'cabin sketch', sans-serif;
    font-size: 40px;
    font-style: italic;
  }
</style>

<header>
  noted

  <button
    on:click={() => {
      isPreviewActive = !isPreviewActive
    }}
  >
    {#if isPreviewActive}
      Edit
    {:else}
      Preview
    {/if}
  </button>
</header>
