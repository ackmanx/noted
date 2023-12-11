<script>
  import { marked } from 'marked'

  export let markdown = ''
</script>

{#if markdown}
  {@html marked.parse(markdown)}
{/if}
