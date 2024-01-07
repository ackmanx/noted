<script lang="ts">
  import ThreeDotMenu from '$lib/images/ThreeDotMenu.svelte'

  let threeDotMenuRef: SVGElement
  let isMenuOpen = false

  function toggleIsMenuOpen() {
    let root = document.documentElement

    root.style.setProperty(
      '--dot-menu-top',
      `${threeDotMenuRef.getBoundingClientRect().top}px`
    )
    root.style.setProperty(
      '--dot-menu-left',
      `${threeDotMenuRef.getBoundingClientRect().left + 20}px`
    )

    isMenuOpen = !isMenuOpen
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
    background-color: cadetblue;
    padding: 10px;
    border-radius: 5px;
  }
</style>

<section>
  <ThreeDotMenu bind:threeDotMenuRef onClick={toggleIsMenuOpen} />

  {#if isMenuOpen}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="options-menu-overlay" on:click={toggleIsMenuOpen}>
      <div class="options-menu">
        <ul role="menu">
          <li role="menuitem">Create Note</li>
          <li role="menuitem">Create Folder</li>
          <li role="menuitem">Delete Folder</li>
        </ul>
      </div>
    </div>
  {/if}
</section>
