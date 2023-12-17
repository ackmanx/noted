<script>
  import PreviewIcon from '$lib/images/preview-icon.svg'
  import EditIcon from '$lib/images/edit-icon.svg'

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

  img {
    height: 40px;
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
      <img src={EditIcon} alt="" />
    </button>

    <button
      class:notActive={!isPreviewActive}
      on:click={() => {
        isPreviewActive = true
      }}
    >
      <img src={PreviewIcon} alt="" />
    </button>
  </div>
</header>
