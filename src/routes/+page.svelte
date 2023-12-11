<script>
  import Header from './Header.svelte'
  import MarkdownView from './MarkdownView.svelte'
  import MarkdownEdit from './MarkdownEdit.svelte'

  /** @type string */
  let markdownInput
</script>

<svelte:head>
  <title>Mmmm, Noted.</title>
</svelte:head>

<Header />

<main>
  <MarkdownEdit bind:markdown={markdownInput} />
  <MarkdownView markdown={markdownInput} />
</main>
