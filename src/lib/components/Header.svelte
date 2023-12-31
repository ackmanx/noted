<script lang="ts">
  import EditIcon from '$lib/images/EditIcon.svelte'
  import PreviewIcon from '$lib/images/PreviewIcon.svelte'

  export let isPreviewActive
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }

  h1 {
    font-family: 'cabin sketch', sans-serif;
    font-size: 40px;
    font-style: italic;
    font-weight: normal;
    margin: 0;
    cursor: pointer;
  }

  .icons-container {
    display: flex;
    align-items: center;
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
  <h1><a href="/" on:click={() => window.location.assign('/')}>noted</a></h1>

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
