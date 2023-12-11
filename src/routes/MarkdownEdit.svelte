<script>
  import { onMount } from 'svelte'
  import { basicSetup, EditorView } from 'codemirror'
  import { EditorState } from '@codemirror/state'
  import { keymap } from '@codemirror/view'
  import { indentWithTab } from '@codemirror/commands'
  import { markdown as markdownLang } from '@codemirror/lang-markdown'
  import { languages } from '@codemirror/language-data'
  import { marked } from 'marked'

  /** @type string */
  export let markdown

  onMount(() => {
    // The Markdown parser will dynamically load parsers
    // for code blocks, using @codemirror/language-data to
    // look up the appropriate dynamic import.
    new EditorView({
      state: EditorState.create({
        // Initial doc
        doc: markdown,
        // Says extensions, but some are facets too
        // Also, `.of()` is how we assign something to a facet (like an event callback in updateListener)
        extensions: [
          // Adds some basic stuff like line numbers
          basicSetup,
          // Allows editor to intercept tabs as tabs in the editor instead of losing focus
          keymap.of([indentWithTab]),
          // Use the markdown plugin for highlighting
          markdownLang({ codeLanguages: languages }),
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

<div class="codemirror-container">
  <!-- CodeMirror markdown editor is injected here due to `parent` field above -->
</div>
