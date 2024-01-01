<script lang="ts">
  import { marked } from 'marked'

  export let markdown = ''
  export let markdownInputTemp = ''
</script>

{#if markdownInputTemp}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html marked.parse(markdownInputTemp)}
{:else if markdown}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html marked.parse(markdown)}
{/if}
