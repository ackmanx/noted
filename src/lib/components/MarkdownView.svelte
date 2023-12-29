<script>
  import { marked } from 'marked'

  /** @type string */
  export let markdown = ''
  /** @type string | undefined */
  export let markdownInputTemp = ''

  /* prettier-ignore */ console.log('^_^', markdown)
</script>

{#if markdownInputTemp}
  {@html marked.parse(markdownInputTemp)}
{:else if markdown}
  {@html marked.parse(markdown)}
{/if}
