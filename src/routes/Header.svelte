<script>
  import PreviewIcon from '$lib/images/PreviewIcon.svelte'
  import EditIcon from '$lib/images/EditIcon.svelte'

  /** @type boolean */
  export let isPreviewActive
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'cabin sketch', sans-serif;
    font-size: 40px;
    font-style: italic;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }

  .icons-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .notActive {
    opacity: 0.25;
  }
</style>

<header>
  <div>noted</div>

  <div class="icons-container">
    <button
      class:notActive={isPreviewActive}
      on:click={() => {
        isPreviewActive = false
      }}
    >
      <EditIcon />
    </button>

    <button
      class:notActive={!isPreviewActive}
      on:click={() => {
        isPreviewActive = true
      }}
    >
      <PreviewIcon />
    </button>
  </div>
</header>
