<script>
  import Header from './Header.svelte'
  import MarkdownView from './MarkdownView.svelte'
  import MarkdownEdit from './MarkdownEdit.svelte'

  /** @type string */
  let markdownInput = '# Marked in the browser\n\nRendered by **marked**.'
</script>

<svelte:head>
  <title>Mmmm, Noted.</title>
</svelte:head>

<Header />

<main>
  <MarkdownEdit markdown={markdownInput} />
  <MarkdownView markdown={markdownInput} />
</main>
