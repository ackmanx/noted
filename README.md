# Noted

## Telling Svelte to shut it
https://svelte.dev/docs/accessibility-warnings

`<!-- svelte-ignore a11y-label-has-associated-control -->`

`<!-- svelte-ignore a11y-click-events-have-key-events -->`

`<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->`
Non-interactive element <li> should not be assigned mouse or keyboard event listeners.

`<!-- svelte-ignore a11y-click-events-have-key-events -->`
Visible, non-interactive elements with an on:click event must be accompanied by a keyboard event handler
