<script>
  import { onMount } from 'svelte'
  import { marked } from 'marked'

  export let markdown = ''

  /** @type string | Promise<string> */
  let htmlPreview

  onMount(() => {
    htmlPreview = marked.parse(markdown)
  })
</script>

{@html htmlPreview}
