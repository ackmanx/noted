# Noted

## Telling Svelte to shut it
The Svelte docs don't tell you which rule corresponds to which warning message
One way to get around it is to search the compiler's source code (link below)

https://svelte.dev/docs/accessibility-warnings
https://github.com/sveltejs/svelte/blob/main/packages/svelte/src/compiler/warnings.js

`<!-- svelte-ignore a11y-label-has-associated-control -->`

`<!-- svelte-ignore a11y-click-events-have-key-events -->`

`<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->`
Non-interactive element <li> should not be assigned mouse or keyboard event listeners.

`<!-- svelte-ignore a11y-click-events-have-key-events -->`
Svelte: A11y: visible, non-interactive elements with an on:click event must be accompanied by a keyboard event handler.

`<!-- svelte-ignore a11y-no-static-element-interactions -->`
Svelte: A11y: <svg> with click handler must have an ARIA role.
