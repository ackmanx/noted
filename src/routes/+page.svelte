<script>
  import { marked } from 'marked'
  import { onMount } from 'svelte'

  import { basicSetup, EditorView } from 'codemirror'
  import { markdown } from '@codemirror/lang-markdown'
  import { languages } from '@codemirror/language-data'
  import { indentWithTab } from '@codemirror/commands'
  import { keymap } from '@codemirror/view'
  import { EditorState } from '@codemirror/state'

  /** @type string | Promise<string> */
  let htmlPreview
  let markdownInput = '# Marked in the browser\n\nRendered by **marked**.'

  onMount(() => {
    htmlPreview = marked.parse(markdownInput)

    // The Markdown parser will dynamically load parsers
    // for code blocks, using @codemirror/language-data to
    // look up the appropriate dynamic import.
    new EditorView({
      state: EditorState.create({
        // Initial doc
        doc: markdownInput,
        // Says extensions, but these are facets according to the docs
        extensions: [
          // Adds some basic stuff like line numbers
          basicSetup,
          // Allows editor to intercept tabs as tabs in the editor instead of losing focus
          keymap.of([indentWithTab]),
          // Use the markdown plugin for highlighting
          markdown({ codeLanguages: languages }),
          // Register an event listener for content changes
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              htmlPreview = marked.parse(update.state.doc.toString())
            }
          }),
        ],
      }),
      // Editor will be appended to parent element defined here
      parent: document.querySelector('.codemirror-container') ?? undefined,
    })
  })
</script>

<svelte:head>
  <title>Mmmm Noted.</title>
</svelte:head>

<main>
  <div class="codemirror-container">
    <!-- CodeMirror markdown editor is injected here due to `parent` field above -->
  </div>
  <div>
    {@html htmlPreview}
  </div>
</main>
