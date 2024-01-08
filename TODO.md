# MVP

## Documents
* Create (done)
* Rename
* Update (done)
* Delete

## Folders
* Create
* Rename
* Update
* Delete

## Users
* Prompt for username on load if none found in local storage
  * Use this username for subsequent actions

## Important
* Add a folder
* Add a note to a folder
* See note filename
* Edit note filename
* Move note to a different folder
* Update url with ID without causing a re-render that loses folder open/close state

## Would be nice
* Change the markdown highlighting so heading levels are different
  * The only way to do this is to create my own theme and import it as an extension
    * When creating an EditorView, import the theme and pass it to the view's extensions
    * ```javascript
        new EditorView({
            doc: "#h1 hello",
            extensions: [oneDark],
            parent: document.body
        })
        ```
  * Example theme to clone: https://github.com/codemirror/theme-one-dark/blob/main/src/one-dark.ts#L115
  * List of tags to use in theme: https://lezer.codemirror.net/docs/ref/#highlight.tags
* Export notes to markdown files
* Search notes
