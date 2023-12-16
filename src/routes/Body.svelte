<script>
  /**
   * @typedef {import("@skeletonlabs/skeleton").TreeViewNode} TreeViewNode
   */

  import MarkdownEdit from './MarkdownEdit.svelte'
  import MarkdownView from './MarkdownView.svelte'

  import { RecursiveTreeView } from '@skeletonlabs/skeleton'

  /** @type boolean */
  export let isPreviewActive
  /** @type string */
  export let markdownInput

  /** @type TreeViewNode[] */
  let myTreeViewNodes = [
    {
      id: 'unique-id1',
      content: '1',
      lead: '(icon)',
      children: [
        {
          id: 'unique-id2',
          content: '2',
          lead: '(icon)',
          children: [
            {
              id: 'unique-id3',
              content: '3',
              lead: '(icon)',
              children: [],
            },
          ],
        },
        {
          id: 'unique-id1a',
          content: '1a',
          lead: '(icon)',
          children: [
            {
              id: 'unique-id2a',
              content: '2a',
              lead: '(icon)',
              children: [
                {
                  id: 'unique-id3a',
                  content: '3a',
                  lead: '(icon)',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ]
</script>

<style>
  main {
    display: flex;
    /*flex-direction: column;*/
  }

  .folder-view {
    width: 300px;
  }

  .markdown-view {
    flex-grow: 1;
  }
</style>

<main>
  <div class="folder-view">
    <RecursiveTreeView nodes={myTreeViewNodes} />
  </div>

  <div class="markdown-view">
    {#if isPreviewActive}
      <MarkdownView markdown={markdownInput} />
    {:else}
      <MarkdownEdit bind:markdown={markdownInput} />
    {/if}
  </div>
</main>
