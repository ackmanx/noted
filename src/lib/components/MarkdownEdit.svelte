<script>
  import { onMount } from 'svelte'
  import { basicSetup, EditorView } from 'codemirror'
  import { EditorState } from '@codemirror/state'
  import { keymap } from '@codemirror/view'
  import { indentWithTab } from '@codemirror/commands'
  import { markdown as markdownLang } from '@codemirror/lang-markdown'
  import { languages } from '@codemirror/language-data'

  /** @type string | undefined */
  export let markdown
  /** @type string | undefined */
  export let markdownInputTemp
  /** @type string | undefined */
  export let currentNoteId

  let isSaveSuccessful

  onMount(() => {
    // The Markdown parser will dynamically load parsers
    // for code blocks, using @codemirror/language-data to
    // look up the appropriate dynamic import.
    new EditorView({
      state: EditorState.create({
        // Initial doc. This could be either the original markdown, or an edit-in-progress and the user has just came back from preview
        doc: markdownInputTemp ?? markdown,
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
              markdownInputTemp = update.state.doc.toString()
            }
          }),
        ],
      }),
      // Editor will be appended to parent element defined here
      parent: document.querySelector('.codemirror-container') ?? undefined,
    })
  })

  async function handleSave() {
    try {
      const response = await fetch(`/api/note/${currentNoteId}`, {
        method: currentNoteId ? 'POST' : 'PUT',
        body: JSON.stringify({ markdown: markdownInputTemp }),
      })

      isSaveSuccessful = response.status === 200
    } catch (error) {
      isSaveSuccessful = false
    } finally {
      setTimeout(() => (isSaveSuccessful = undefined), 3000)
    }
  }
</script>

<button on:click={handleSave}>Save</button>

{#if isSaveSuccessful}
  Success!
{:else if isSaveSuccessful === false}
  Failure!
{/if}

<div class="codemirror-container">
  <!-- CodeMirror markdown editor is injected here due to `parent` field above -->
</div>
