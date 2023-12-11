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

  img {
    height: 40px;
  }
</style>

<header>
  <div>noted</div>

  <div class="icons-container">
    <button
      on:click={() => {
        isPreviewActive = false
      }}
    >
      <img src={EditIcon} alt="" />
    </button>

    <button
      on:click={() => {
        isPreviewActive = true
      }}
    >
      <img src={PreviewIcon} alt="" />
    </button>
  </div>
</header>
