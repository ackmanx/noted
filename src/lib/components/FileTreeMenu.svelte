<script>
  import ThreeDotMenu from '$lib/images/ThreeDotMenu.svelte'

  let isMenuOpen = false

  function toggleIsMenuOpen() {
    isMenuOpen = !isMenuOpen
  }
</script>

<section>
  <ThreeDotMenu onClick={toggleIsMenuOpen} />

  {#if isMenuOpen}>
    <h1>click click click</h1>
  {/if}
</section>
