<script lang="ts">
  import { marked } from 'marked'

  export let markdown = ''
  export let markdownInputTemp = ''
</script>

{#if markdownInputTemp}
  {@html marked.parse(markdownInputTemp)}
{:else if markdown}
  {@html marked.parse(markdown)}
{/if}
