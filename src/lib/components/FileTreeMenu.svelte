<script lang="ts">
  import ThreeDotMenu from '$lib/images/ThreeDotMenu.svelte'

  let isSaveSuccessful = undefined
  let isMenuOpen = false

  function toggleIsMenuOpen(event: MouseEvent) {
    let root = document.documentElement

    root.style.setProperty('--dot-menu-top', `${event.clientY}px`)
    root.style.setProperty('--dot-menu-left', `${event.clientX}px`)

    isMenuOpen = !isMenuOpen
  }

  async function handleCreateNote() {
    try {
      const response = await fetch(`/api/note/too-lazy-to-make-another-route`, {
        method: 'PUT',
        body: JSON.stringify({ markdown: '' }),
      })

      isSaveSuccessful = response.status === 200
    } catch (error) {
      isSaveSuccessful = false
    } finally {
      setTimeout(() => (isSaveSuccessful = undefined), 3000)
    }
  }
</script>

<style>
  .options-menu-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .options-menu {
    position: absolute;
    top: var(--dot-menu-top);
    left: var(--dot-menu-left);
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 3px 4px 10px 0 #c8c8c8;
  }

  @media (prefers-color-scheme: dark) {
    .options-menu {
      background-color: #28292a;
      border: 1px solid #1f1f1f;
      box-shadow: 3px 4px 10px 0 #1f1f1f;
    }
  }

  li {
    padding: 5px;

    &:hover {
      color: red;
    }
  }
</style>

<section>
  <ThreeDotMenu onClick={toggleIsMenuOpen} />

  {#if isSaveSuccessful}
    Success!
  {:else if isSaveSuccessful === false}
    Failure!
  {/if}

  {#if isMenuOpen}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="options-menu-overlay" on:click={toggleIsMenuOpen}>
      <div class="options-menu">
        <ul role="menu">
          <li role="menuitem" on:click={handleCreateNote}>Create Note</li>
          <li role="menuitem">Create Folder</li>
          <li role="menuitem">Delete Folder</li>
        </ul>
      </div>
    </div>
  {/if}
</section>
